/**
 * Criando um repositório especifico para trabalhar com o Product
 */

import Product from "../entity/product";
import RepositoryInterface from "./repository-interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {

}