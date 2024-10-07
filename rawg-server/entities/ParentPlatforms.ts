import { Column, Entity, ManyToMany } from "typeorm";
import { Game } from "./Games";

@Entity("parent_platforms", { schema: "rawgdatabase" })
export class ParentPlatform {
  @Column("int", { primary: true, name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug!: string;

  @ManyToMany(() => Game, (game) => game.parent_platforms)
  games!: Game[];
}
