import { Sequelize } from "sequelize-typescript";
import ProductModel from "../db/sequelize/model/product.model";

describe('Product repository test', () => {

    let sequelize: Sequelize;
    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        });

        //Adição do model, para dizer ao sequelize que esse model existe
        sequelize.addModels([ProductModel]);
        await sequelize.sync();     
    });
    afterEach(async () => {
        await sequelize.close();
    });
})