package dk.lyngby.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "jewelry")
@Getter
@Setter
@NoArgsConstructor
public class Jewelry {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String type;
    private int price;
    private String style;
    private String image;

}
