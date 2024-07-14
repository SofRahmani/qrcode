import { z } from "zod";

export const qrGeneratorSchema = z.object({
  data: z
    .string()
    .min(1, { message: "Le texte doit contenir au moins 1 caractère." })
    .max(500, { message: "Le texte doit contenir moins de 500 caractères." }),
  size: z
    .enum([
      "50x50",
      "100x100",
      "150x150",
      "200x200",
      "250x250",
      "300x300",
      "350x350",
      "400x400",
      "450x450",
      "500x500",
      "550x550",
      "600x600",
      "650x650",
      "700x700",
      "750x750",
      "800x800",
      "850x850",
      "900x900",
      "950x950",
      "1000x1000"
    ])
    .default("200x200"),
  format: z.enum(["png", "gif", "jpeg", "jpg", "svg", "eps"]).default("png"),
  color: z.string().min(1).max(7).default("#000000"),
  bgColor: z.string().min(1).max(7).default("#ffffff")
});

export type QrGeneratorSchemaType = z.infer<typeof qrGeneratorSchema>;
