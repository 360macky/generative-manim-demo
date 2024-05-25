import Homepage from "@/components/homepage";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "@/components/logo.png";
import Switcher from "@/components/Main";


export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-neutral-950 dark:text-white">
      <div className="text-center flex flex-col gap-y-4 px-6 lg:px-24">
      <Image
        src={Logo}
        alt="Logo"
        className="w-24 lg:w-32 h-24 lg:h-32 mx-auto mt-12"
      />
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          Generative Manim
        </h1>
        <p className="text-xl lg:text-2xl text-rose-400 dark:text-rose-200">
          {t("pageDescription")}
        </p>
      </div>
      <main className="max-w-screen-lg sm:w-screen">
        <Switcher translations={{
          generateVideo: t("generateVideo"),
          renderEngine: t("renderEngine"),
          promptGenerator: t("promptGenerator")
        }} />
      </main>
      
    </div>
      </main>
      <footer className="bg-white md:flex dark:bg-neutral-900 border border-t-neutral-200 dark:border-t-neutral-800 border-transparent">
        <div className="m-auto max-w-screen-lg md:py-4 flex w-full flex-col justify-center md:flex-row md:justify-between">
          <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
              Made by the{" "}
              <a
                href="https://discord.gg/HkbYEGybGv"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rose-300 underline-offset-4"
              >
                Generative Manim Community
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
