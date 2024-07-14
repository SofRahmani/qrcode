"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ColorPicker } from "@/components/ui/ColorPicket";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { qrGeneratorSchema, QrGeneratorSchemaType } from "@/schema/qrGenerator.schema";
import { useQrCodeResultStore } from "@/store/qrCodeResult.store";
import { removeHashtag } from "@/utils/removeHashtag";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { formatOptions, sizeOptions } from "./formOptions";

export default function QrGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { updateResult } = useQrCodeResultStore();

  const form = useForm<QrGeneratorSchemaType>({
    resolver: zodResolver(qrGeneratorSchema),
    defaultValues: {
      data: "",
      size: "200x200",
      format: "png",
      color: "#000000",
      bgColor: "#ffffff"
    }
  });

  const onSubmit = (values: QrGeneratorSchemaType) => {
    setIsLoading(true);
    values.color = removeHashtag(values.color);
    values.bgColor = removeHashtag(values.bgColor);

    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?data=${values.data}&size=${values.size}&format=${values.format}&color=${values.color}&bgcolor=${values.bgColor}&ecc=Q&qzone=2`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsLoading(false);
        toast.success("QR Code généré avec succès");
        updateResult(data.blob);
      })
      .catch(error => {
        console.error("Error:", error);
        setIsLoading(false);
        toast.error("Une erreur est survenue lors de la génération du QR Code");
      });
  };

  return (
    <Card className="w-full p-4">
      <CardContent>
        <Form {...form}>
          <form
            id="qr-generator-form"
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Données */}
            <FormField
              control={form.control}
              name="data"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Données</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="font-mono"
                      placeholder="https://google.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Indiquez le texte ou l&apos;URL à encoder</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Taille */}
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taille</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="font-mono">
                      {sizeOptions.map(size => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Sélectionnez la taille en pixel de votre QR Code
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Format */}
            <FormField
              control={form.control}
              name="format"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Format</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="font-mono">
                      {formatOptions.map(format => (
                        <SelectItem key={format} value={format}>
                          {format}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Sélectionnez le format de votre QR Code</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Couleur */}
            <div>
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Couleur du QR Code</FormLabel>
                    <ColorPicker background={field.value} setBackground={field.onChange} />

                    <FormDescription>Sélectionnez la couleur de votre QR Code</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Background */}
            <div>
              <FormField
                control={form.control}
                name="bgColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Couleur de fond</FormLabel>
                    <ColorPicker background={field.value} setBackground={field.onChange} />

                    <FormDescription>
                      Sélectionnez la couleur de fond de votre QR Code
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button
          form="qr-generator-form"
          disabled={isLoading}
          variant="default"
          size="lg"
          className="w-full"
        >
          Générer un QR Code
          {isLoading ? <LoaderCircle className="ml-2 size-4 animate-spin" /> : null}
        </Button>
      </CardFooter>
    </Card>
  );
}
