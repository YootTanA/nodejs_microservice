const { ProductRepository } = require("../database");
const { FormateData } = require("../utils");

// All Business logic will be here
class ProductService {
  constructor() {
    this.repository = new ProductRepository();
  }

  async CreateProduct(productInputs) {
    if (productInputs == "" || productInputs == undefined) {
      throw new Error("product inputs should not be not defined");
    }
    if (productInputs.name == "" || productInputs.name == undefined) {
      throw new Error("product name should not be empty");
    }

    const productResult = await this.repository.CreateProduct(productInputs);
    return FormateData(productResult);
  }

  async RemoveProductByName(name) {
    if (name == "" || productInputs.name == undefined) {
      throw new Error("product name should not be empty");
    }
    return await this.repository.RemoveProductByName(name);
  }

  async GetProducts() {
    const products = await this.repository.Products();

    let categories = {};

    products.map(({ type }) => {
      categories[type] = type;
    });

    return FormateData({
      products,
      categories: Object.keys(categories),
    });
  }

  async GetProductDescription(productId) {
    const product = await this.repository.FindById(productId);
    return FormateData(product);
  }

  async GetProductsByCategory(category) {
    const products = await this.repository.FindByCategory(category);
    return FormateData(products);
  }

  async GetSelectedProducts(selectedIds) {
    const products = await this.repository.FindSelectedProducts(selectedIds);
    return FormateData(products);
  }

  async GetProductPayload(userId, { productId, qty }, event) {
    const product = await this.repository.FindById(productId);

    if (product) {
      const payload = {
        event: event,
        data: { userId, product, qty },
      };

      return FormateData(payload);
    } else {
      return FormateData({ error: "No product Available" });
    }
  }
}

module.exports = ProductService;
