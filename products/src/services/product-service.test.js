const ProductService = require("./product-service");
const { ProductRepository } = require("../database");

class MockProductRepository extends ProductRepository {
  constructor(initProducts) {
    super();
    this.products = initProducts;
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

  async Products() {
    return this.products;
  }
}

describe("ProductService", () => {
  describe("CreateProduct", () => {
    const mockProductRepository = new MockProductRepository([]);
    const productService = new ProductService(mockProductRepository);

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

  describe("GetTotalProductPrice", () => {
    const products = [
      {
        name: "a",
        desc: "",
        type: "",
        unit: "",
        price: 100,
        available: "",
        suplier: "",
        banner: "",
      },
      {
        name: "b",
        desc: "",
        type: "",
        unit: "",
        price: 200,
        available: "",
        suplier: "",
        banner: "",
      },
    ];

    const mockProductRepository = new MockProductRepository(products);
    const productService = new ProductService(mockProductRepository);

    test("having 2 products, product a has 100 values, product b has 200 values should return 300", async () => {
      const productTotalPrice = await productService.GetTotalProductPrice();
      expect(productTotalPrice).toBe(300);
    });
  });
});
