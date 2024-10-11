const ProductService = require("./product-service");
const { ProductRepository } = require("../database");

describe("ProductService", () => {
  class MockProductRepository extends ProductRepository {
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

  const mockProductRepository = new MockProductRepository();
  const productService = new ProductService(mockProductRepository);

  describe("CreateProduct", () => {
    test("giving empty product name go as expected", () => {
      const productInputs = {
        name: "",
        desc: "",
        type: "",
        unit: "",
        price: 100,
        available: "",
        suplier: "",
        banner: "",
      };
      expect(productService.CreateProduct(productInputs)).rejects.toThrow();
    });

    test("giving non empty product inputs go as expected", async () => {
      const productInputs = {
        name: "mock",
        desc: "",
        type: "",
        unit: "",
        price: 100,
        available: "",
        suplier: "",
        banner: "",
      };
      expect(productService.CreateProduct(productInputs)).not.toBeNull();
    });
  });
});
