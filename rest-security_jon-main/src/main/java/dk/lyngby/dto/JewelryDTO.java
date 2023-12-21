package dk.lyngby.dto;

import com.fasterxml.jackson.annotation.JsonProperty; // Ensure you import this
import dk.lyngby.model.Jewelry;
import java.util.List;
import java.util.stream.Collectors;

public class JewelryDTO {

    private Integer id;
    private String name;
    private String type;
    private int price;
    private String style;
    private String image;

    public JewelryDTO(Jewelry jewelry) {
        this.id = jewelry.getId();
        this.name = jewelry.getName();
        this.type = jewelry.getType();
        this.price = jewelry.getPrice();
        this.style = jewelry.getStyle();
        this.image = jewelry.getImage();
    }


    @JsonProperty("id")
    public Integer getId() {
        return id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("type")
    public String getType() {
        return type;
    }

    @JsonProperty("price")
    public int getPrice() {
        return price;
    }

    @JsonProperty("style")
    public String getStyle() {
        return style;
    }

    @JsonProperty("image")
    public String getImage() {
        return image;
    }

    public static List<JewelryDTO> toJewelryDTOList(List<Jewelry> jewelries) {
        return jewelries.stream().map(JewelryDTO::new).collect(Collectors.toList());
    }
}