import { Entity, Column, ManyToOne, getRepository, OneToMany } from "typeorm";

@Entity({ name: "devices" })
export class Device {
    // @Column()
    // type: DeviceType;
    
    @Column({ unique: true })
    installationId: string;

    @Column({ default: false })
    isLinked: boolean;

    @Column({ nullable: true })
    locale?: string;

    @Column({ nullable: true })
    timezone?: number;

    // @ManyToOne((type) => User, (user) => user.devices, {
    //     nullable: true,
    //     eager: true,
    // })
    // user?: User;

    accessToken: string;
}
