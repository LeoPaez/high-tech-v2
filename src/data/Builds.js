export const builds = [
  //* Pc Starter
  {
    id: 1,
    img: "/assets/img/pc-starter.webp",
    title: "Starter",
    price: "399",
    category: "pc-armada",
    cpu: "Intel Core i5 / Ryzen 5600",
    gpu: "GeForce GTX 1660",
    ram: "16GB DDR4",
    cooling: "Refrigeración por aire estándar",
    components: {
      cpu: ["Intel Core i5-12400F", "AMD Ryzen 5 5600X"],
      gpu: ["ASUS TUF Gaming GeForce GTX 1660", "MSI AMD Radeon RX 6600"],
      ram: ["Corsair Vengeance DDR4 16GB 2X8GB"],
      storage: ["WD Blue 1TB 3.5\" SATA3", "Kingston A400 SSD 480GB"],
      img: {
        cpu: "/assets/img/products/processors/i9-13900k.webp",
        gpu: "/assets/img/products/graphics-cards/asus-tuf-gaming-geforce-gtx-1660-super-oc-edition-6gb-gddr6.webp",
        ram: "/assets/img/products/ram/corsair-vengeance-lpx-ddr4-16gb-2x8gb.webp",
      },
    }
  },
  //* Pc Pro
  {
    id: 2,
    img: "/assets/img/pc-pro.webp",
    title: "Pro",
    price: "599",
    category: "pc-armada",
    cpu: "Intel Core i7 / Ryzen 5800",
    gpu: "GeForce RTX 3060",
    ram: "16GB DDR4",
    cooling: "Refrigeración liquida estándar",
    components: {
      cpu: ["Intel Core i7-11700K", "AMD Ryzen 7 5800X"],
      gpu: ["Asus Dual GeForce RTX 3060 OC Edition", "Sapphire NITRO+ AMD Radeon RX 6800"],
      ram: ["Corsair Vengeance RGB Pro DDR4 16GB 2x8GB"],
      storage: ["WD Blue 2TB 3.5\" SATA3", "Samsung 980 SSD 1TB NVMe M.2"],
      img: {
        cpu: "/assets/img/products/processors/i7-11700k.webp",
        gpu: "/assets/img/products/graphics-cards/msi-geforce-rtx-2060-ventus-oc-12gb-gddr6.webp",
        ram: "/assets/img/products/ram/corsair-vengeance-rgb-pro-ddr416gb-2x8gb.webp",
      },
    }
  },
  //* Pc Premium
  {
    id: 3,
    img: "/assets/img/pc-premium.webp",
    title: "Premium",
    price: "899",
    category: "pc-armada",
    cpu: "Intel Core i9 / Ryzen 5900",
    gpu: "GeForce RTX 3090",
    ram: "32GB DDR4",
    cooling: "Refrigeración liquida estándar",
    components: {
      cpu: ["Intel Core i9-13900K", "AMD Ryzen 9 5900X"],
      gpu: ["EVGA GeForce RTX 3090", "MSI AMD Radeon RX 6800"],
      ram: ["G.Skill Trident Z Neo DDR4 32GB 2x16GB"],
      storage: ["WD Red 4TB 3.5\" SATA3", "MSI Spatium M480 SSD 2TB M.2"],
      img: {
        cpu: "/assets/img/products/processors/i5-12400f.webp",
        gpu: "/assets/img/products/graphics-cards/evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x.webp",
        ram: "/assets/img/products/ram/G.Skill-Trident-Z-Neo-DDR4-32GB-2x16GB.webp",
      },
    }
  },
]