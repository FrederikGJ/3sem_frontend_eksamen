package dk.lyngby.routes;

import dk.lyngby.controller.impl.JewelryController;
import dk.lyngby.security.RouteRoles;
import io.javalin.apibuilder.EndpointGroup;

import static io.javalin.apibuilder.ApiBuilder.*;

public class JewelryRoute {
    private final JewelryController jewelryController = new JewelryController();

    protected EndpointGroup getRoutes() {

        return () -> {
            path("/jewelry", () -> {
                post("/", jewelryController::create, RouteRoles.ADMIN, RouteRoles.MANAGER);
                get("/", jewelryController::readAll, RouteRoles.ANYONE);
                get("/{id}", jewelryController::read, RouteRoles.USER, RouteRoles.ADMIN, RouteRoles.MANAGER);
                put("/{id}", jewelryController::update, RouteRoles.ADMIN, RouteRoles.MANAGER);
                delete("/{id}", jewelryController::delete, RouteRoles.ADMIN, RouteRoles.MANAGER);
                get("/necklace", jewelryController::readType, RouteRoles.ANYONE);
            });
        };
    }
}