import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genres } from "./Genres";
import { ParentPlatforms } from "./ParentPlatforms";
import { Stores } from "./Stores";

@Entity("games", { schema: "rawgdatabase" })
export class Games {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "background_image", nullable: true, length: 255 })
  background_image!: string | null;

  @Column("int", { name: "metacritic", nullable: true })
  metacritic!: number | null;

  @ManyToMany(() => Genres, (genres) => genres.games)
  @JoinTable({
    name: "games_genres",
    joinColumns: [{ name: "games_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "genres_id", referencedColumnName: "id" }],
    schema: "rawgdatabase",
  })
  genres!: Genres[];

  @ManyToMany(() => ParentPlatforms, (parentPlatforms) => parentPlatforms.games)
  @JoinTable({
    name: "games_parent_platforms",
    joinColumns: [{ name: "games_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "parent_platforms_id", referencedColumnName: "id" },
    ],
    schema: "rawgdatabase",
  })
  parentPlatforms!: ParentPlatforms[];

  @ManyToMany(() => Stores, (stores) => stores.games)
  @JoinTable({
    name: "games_stores",
    joinColumns: [{ name: "games_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "stores_id", referencedColumnName: "id" }],
    schema: "rawgdatabase",
  })
  stores!: Stores[];
}
