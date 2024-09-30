import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genre } from "./Genres";
import { ParentPlatform } from "./ParentPlatforms";
import { Store } from "./Stores";

@Entity("games", { schema: "rawgdatabase" })
export class Game {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "background_image", nullable: true, length: 255 })
  background_image!: string | null;

  @Column("int", { name: "metacritic", nullable: true })
  metacritic!: number | null;

  @ManyToMany(() => Genre, (genre) => genre.games)
  @JoinTable({
    name: "games_genres",
    joinColumns: [{ name: "games_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "genres_id", referencedColumnName: "id" }],
    schema: "rawgdatabase",
  })
  genres!: Genre[];

  @ManyToMany(() => ParentPlatform, (parentPlatform) => parentPlatform.games)
  @JoinTable({
    name: "games_parent_platforms",
    joinColumns: [{ name: "games_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "parent_platforms_id", referencedColumnName: "id" },
    ],
    schema: "rawgdatabase",
  })
  parentPlatforms!: ParentPlatform[];

  @ManyToMany(() => Store, (store) => store.games)
  @JoinTable({
    name: "games_stores",
    joinColumns: [{ name: "games_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "stores_id", referencedColumnName: "id" }],
    schema: "rawgdatabase",
  })
  stores!: Store[];
}
