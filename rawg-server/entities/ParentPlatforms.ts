import { Column, Entity, ManyToMany } from "typeorm";
import { Games } from "./Games";

@Entity("parent_platforms", { schema: "rawgdatabase" })
export class ParentPlatforms {
  @Column("int", { primary: true, name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug!: string;

  @ManyToMany(() => Games, (games) => games.parentPlatforms)
  games!: Games[];
}
