"use client";

import { Button } from "@/components/ui/button";
import { useQrCodeFormatStore, useQrCodeResultStore } from "@/store/qrCodeResult.store";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../../public/QRCode - Logo.svg";

export default function ResultContainer() {
  const { result } = useQrCodeResultStore();
  const { format } = useQrCodeFormatStore();

  return (
    <div className="flex size-full flex-col items-center justify-center gap-10 p-8">
      {result ? (
        <Image
          src={URL.createObjectURL(result)}
          quality={100}
          priority
          alt="QR Code"
          width={300}
          height={300}
        />
      ) : (
        <Image
          src={Logo}
          alt="QR Code placeholder"
          width={300}
          height={300}
          quality={90}
          className="opacity-40 lg:pb-20"
        />
      )}

      {result ? (
        <Link href={URL.createObjectURL(result)} download={`QRCode.${format}`} target="_blank">
          <Button variant="outline" size="lg">
            Télécharger
            <ArrowDownToLine className="ml-2 size-4" />
          </Button>
        </Link>
      ) : null}
    </div>
  );
}
