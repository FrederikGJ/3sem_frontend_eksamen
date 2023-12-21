package dk.lyngby.controller.impl;

import dk.lyngby.config.HibernateConfig;
import dk.lyngby.controller.IController;
import dk.lyngby.dao.impl.HotelDao;
import dk.lyngby.dao.impl.JewelryDAO;
import dk.lyngby.dto.HotelDto;
import dk.lyngby.dto.JewelryDTO;
import dk.lyngby.model.Hotel;
import dk.lyngby.model.Jewelry;
import io.javalin.http.Context;
import jakarta.persistence.EntityManagerFactory;

public class JewelryController implements IController<Jewelry, Integer> {

    private final JewelryDAO dao;

    public JewelryController() {
        EntityManagerFactory emf = HibernateConfig.getEntityManagerFactory();
        this.dao = JewelryDAO.getInstance(emf);
    }

    @Override
    public void read(Context ctx) {
        // request
        int id = ctx.pathParamAsClass("id", Integer.class).check(this::validatePrimaryKey, "Not a valid id").get();
        // entity
        Jewelry jewelry = dao.read(id);
        // dto
        JewelryDTO jewelryDTO = new JewelryDTO(jewelry);
        // response
        ctx.res().setStatus(200);
        ctx.json(jewelryDTO, JewelryDTO.class);
    }

    @Override
    public void readAll(Context ctx) {
        // entity
        var jewelries = dao.readAll();
        // dto
        var jewelryDtos = JewelryDTO.toJewelryDTOList(jewelries);
        // response
        ctx.res().setStatus(200);
        ctx.json(jewelryDtos, JewelryDTO.class);
    }

    @Override
    public void create(Context ctx) {
        // request
        //Jewelry jsonRequest = validateEntity(ctx);
        Jewelry jsonRequest = ctx.bodyAsClass(Jewelry.class);
        // entity
        Jewelry jewelry = dao.create(jsonRequest);
        // dto
        JewelryDTO jewelryDTO = new JewelryDTO(jewelry);
        // response
        ctx.res().setStatus(201);
        ctx.json(jewelryDTO, JewelryDTO.class);
    }

    @Override
    public void update(Context ctx) {
        // request
        int id = ctx.pathParamAsClass("id", Integer.class).check(this::validatePrimaryKey, "Not a valid id").get();
        //Jewelry jsonRequest = validateEntity(ctx);
        Jewelry jsonRequest = ctx.bodyAsClass(Jewelry.class);
        // entity
        Jewelry jewelry = dao.update(id, jsonRequest);
        // dto
        JewelryDTO jewelryDTO = new JewelryDTO(jewelry);
        // response
        ctx.res().setStatus(200);
        ctx.json(jewelryDTO, JewelryDTO.class);
    }

    @Override
    public void delete(Context ctx) {
        // request
        int id = ctx.pathParamAsClass("id", Integer.class).check(this::validatePrimaryKey, "Not a valid id").get();
        // entity
        dao.delete(id);
        // response
        ctx.res().setStatus(204);
    }


    public void readType (Context ctx) {
        // request
        String type = ctx.pathParam("type");
        // entity
        var jewelries = dao.readByType(type);
        // dto
        var jewelryDtos = JewelryDTO.toJewelryDTOList(jewelries);
        // response
        ctx.res().setStatus(200);
        ctx.json(jewelryDtos, JewelryDTO.class);
    }

    @Override
    public boolean validatePrimaryKey(Integer integer) {
        return false;
    }

    @Override
    public Jewelry validateEntity(Context ctx) {
        return null;
    }
}
