const ProductService = require("./product-service");
const { ProductRepository } = require("../database");

describe("ProductService", () => {
  describe("CreateProduct", () => {
    class mockProductRepository extends ProductRepository {
      constructor() {
        super();
      }
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

    test("giving empty product name go as expected", () => {
      const mockRepo = new mockProductRepository();
      const productService = new ProductService(mockRepo);
      const productInput = {
        name: "",
        desc: "",
        type: "",
        unit: "",
        price: 100,
        available: "",
        suplier: "",
        banner: "",
      };

      expect(productService.CreateProduct(productInput)).rejects.toThrow();
    });

    test("giving non empty product inputs go as expected", async () => {
      const mockRepo = new mockProductRepository();
      const productService = new ProductService(mockRepo);
      const productInput = {
        name: "mock",
        desc: "",
        type: "",
        unit: "",
        price: 100,
        available: "",
        suplier: "",
        banner: "",
      };
      expect(productService.CreateProduct(productInput)).not.toBeNull();
    });
  });
});
