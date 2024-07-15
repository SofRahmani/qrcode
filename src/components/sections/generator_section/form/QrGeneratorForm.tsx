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
import { useQrCodeResultStore, useQrCodeFormatStore } from "@/store/qrCodeResult.store";
import { removeHashtag } from "@/utils/removeHashtag";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { formatOptions, sizeOptions } from "./formOptions";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'



export default function QrGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { updateResult, removeResult } = useQrCodeResultStore();
  const { updateFormat, removeFormat } = useQrCodeFormatStore();

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

  const onSubmit = async (values: QrGeneratorSchemaType) => {

    values.color = removeHashtag(values.color);
    values.bgColor = removeHashtag(values.bgColor);
    updateFormat(values.format);

    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?data=${values.data}&size=${values.size}&format=${values.format}&color=${values.color}&bgcolor=${values.bgColor}&ecc=Q&qzone=2`,
      {
        method: "GET"
      }
    )
      .then(response => response.blob())
      .then(data => {
        console.log(data);
        setIsLoading(false);
        toast.success("QR Code généré avec succès");
        updateResult(data);
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
      <CardFooter className='flex gap-2'>
        <Button
          form="qr-generator-form"
          disabled={isLoading}
          type='submit'
          variant="default"
          size="lg"
          className="w-full flex-1"
        >
          Générer un QR Code
          {isLoading ? <LoaderCircle className="ml-2 size-4 animate-spin" /> : null}
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"destructive"} size={"lg"} onClick={() => {
              form.reset()
              removeResult()
              removeFormat()
              toast.info("Paramètres réinitialisés !")
            }}>
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Réinitialiser les paramètres</p>
          </TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
