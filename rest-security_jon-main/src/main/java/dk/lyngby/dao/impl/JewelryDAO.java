package dk.lyngby.dao.impl;

import dk.lyngby.dao.IDao;
import dk.lyngby.model.Hotel;
import dk.lyngby.model.Jewelry;
import jakarta.persistence.EntityManagerFactory;

import java.util.List;

public class JewelryDAO implements IDao<Jewelry, Integer> {

    private static JewelryDAO instance;
    private static EntityManagerFactory emf;

    public static JewelryDAO getInstance(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new JewelryDAO();
        }
        return instance;
    }

    @Override
    public Jewelry read(Integer integer) {
        try (var em = emf.createEntityManager())
        {
            return em.find(Jewelry.class, integer);
        }
    }

    @Override
    public List<Jewelry> readAll() {
        try (var em = emf.createEntityManager())
        {
            var query = em.createQuery("SELECT j FROM Jewelry j", Jewelry.class);
            return query.getResultList();
        }
    }

    @Override
    public Jewelry create(Jewelry jewelry) {
        try (var em = emf.createEntityManager())
        {
            em.getTransaction().begin();
            em.persist(jewelry);
            em.getTransaction().commit();
            return jewelry;
        }
    }

    @Override
    public Jewelry update(Integer integer, Jewelry jewelry) {
        try(var em = emf.createEntityManager()) {
            em.getTransaction().begin();

            var j = em.find(Jewelry.class, integer);
            j.setName(jewelry.getName());
            j.setType(jewelry.getType());
            j.setPrice(jewelry.getPrice());
            j.setStyle(jewelry.getStyle());
            j.setImage(jewelry.getImage());

            em.getTransaction().commit();
            return j;
        }
    }

    @Override
    public void delete(Integer integer) {
        try(var em = emf.createEntityManager()) {
            em.getTransaction().begin();
            var jewelry = em.find(Jewelry.class, integer);
            em.remove(jewelry);
            em.getTransaction().commit();
        }
    }

    public List<Jewelry> readByType(String type) {
        try (var em = emf.createEntityManager())
        {
            var query = em.createQuery("SELECT j FROM Jewelry j WHERE j.type = :type", Jewelry.class);
            query.setParameter("type", type);
            return query.getResultList();
        }
    }

    @Override
    public boolean validatePrimaryKey(Integer integer) {
        try(var em = emf.createEntityManager()) {
            var jewelry = em.find(Jewelry.class, integer);
            return jewelry != null;
        }
    }
}
