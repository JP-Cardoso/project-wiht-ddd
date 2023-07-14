/**
 * Criando um repositório especifico para trabalhar com o Product
 */

import RepositoryInterface from "../../@shared/repository/repository-interface";
import Product from "../entity/product";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {

}