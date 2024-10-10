const ProductService = require("./product-service");
const { ProductRepository } = require("../database");

describe("ProductService", () => {
  describe("CreateProduct", () => {
    class mockProductRepository extends ProductRepository {
      async CreateProduct({
        name,
        desc,
        type,
        unit,
        price,
        available,
        suplier,
        banner,
      }) {
        return {};
      }
    }
    const productService = new ProductService(mockProductRepository);
    const productInput = {
      name: "",
      desc: "",
      type: "",
      unit: "",
      price: "",
      available: "",
      suplier: "",
      banner: "",
    };

    test("giving empty product name go as expected", () => {
      expect(productService.CreateProduct(productInput)).rejects.toThrow();
    });

    test("giving non empty product inputs go as expected", async () => {});
  });
});
