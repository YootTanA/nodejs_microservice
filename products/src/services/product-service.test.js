const { ProductRepository } = require("../database");
const ProductService = require("./product-service");

describe("ProductService", () => {
  const productService = new ProductService();

  describe("CreateProduct", () => {
    const mockProductInputs = {
      name: "Tiramisu Cake",
    };

    class mockProductRepository extends ProductRepository {
      constructor(products) {
        super();
        this.products = products;
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
        const product = {
          name: name,
          desc: desc,
          type: type,
          unit: unit,
          price: price,
          available: available,
          suplier: suplier,
          banner: banner,
        };
        this.products.push(product);

        return product;
      }

      async Products() {
        return this.products;
      }
    }

    productService.repository = new mockProductRepository([]);

    test("giving empty product name go as expected", () => {
      expect(
        async () => await productService.CreateProduct(),
      ).rejects.toThrow();
    });

    test("giving non empty product inputs go as expected", async () => {
      const result = await productService.CreateProduct(mockProductInputs);
      expect(result).not.toBeNull();
    });
  });
});
