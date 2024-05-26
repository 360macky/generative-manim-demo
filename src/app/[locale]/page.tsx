import Homepage from "@/components/homepage";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "@/components/logo.png";
import Switcher from "@/components/Main";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center w-full bg-white dark:bg-neutral-950 dark:text-white">
        <div className="text-center gap-y-4 px-0 lg:px-24 w-full">
          <Image
            src={Logo}
            alt="Logo"
            className="w-24 lg:w-32 h-24 lg:h-32 mx-auto mt-12"
          />
          <div className="flex flex-col gap-y-2 w-full">
            <h1
              className="text-4xl lg:text-5xl font-semibold tracking-tight"
              itemProp="title"
            >
              Generative Manim
            </h1>
            <p
              className="text-xl lg:text-2xl text-rose-400 dark:text-rose-200"
              itemProp="subheading"
            >
              {t("pageDescription")}
            </p>
          </div>
          <section
            className="max-w-screen-lg mx-auto p-2"
            itemProp="description"
          >
            <b>Generative Manim</b> is an open-source tool for generating{" "}
            animation videos from text. — Built on top of the{" "}
            <a
              href="https://docs.manim.community/en/stable/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rose-300 underline-offset-4"
            >
              Manim
            </a>{" "}
            library.
          </section>
          <section className="max-w-screen-lg mx-auto p-2">
            <Switcher
              translations={{
                generateVideo: t("generateVideo"),
                renderEngine: t("renderEngine"),
                promptGenerator: t("promptGenerator"),
              }}
            />
          </section>
          <section className="text-left max-w-screen-lg mx-auto p-2">
            <h2
              className="text-2xl lg:text-3xl font-semibold tracking-tight"
              id="how-it-works"
            >
              <i role="img" aria-label="⚡️">
                ⚡️
              </i>{" "}
              How it works
            </h2>
            <p className="text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 my-2">
              Making video animations accessible to everyone.{" "}
            </p>
            <p>
              Imagine a future where you can watch an animation video from a
              concept you have in your mind in a few seconds. That would be
              useful for teachers, students, and more. People that want to
              generate a video won&apos;t need to learn how to use a video
              editor, how to draw, or how to code. You just need to write a
              descriptive text.
            </p>
            <p>
              That indeed is a future. And it is not that far. We can already
              start working on it.
            </p>
            <p>
              Manim is a Python library for creating complex graphics and
              animations. The main advantage of Manim for GPT, it&apos;s that
              since it&apos;s a language for the LLM, it&apos;s more easy to
              generate proper code from a prompt.
            </p>
          </section>
          <section className="text-left max-w-screen-lg mx-auto p-2">
            <h2
              className="text-2xl lg:text-3xl font-semibold tracking-tight"
              id="contributors"
            >
              <i role="img" aria-label="🚀">
                🚀
              </i>{" "}
              Contributors
            </h2>
            <p className="text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 my-2">
              Awesome people that are contributing to the project.
            </p>
            <p>
              Generative Manim is an open source project. You can contribute to
              the project by suggesting new features, fixing bugs, or improving
              the documentation.{" "}
              <a
                href="https://github.com/360macky/generative-manim/pulls"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rose-300 underline-offset-4"
              >
                Pull Requests
              </a>{" "}
              are warmly welcome.
            </p>
            <p>
              Remember you can also join our{" "}
              <a
                href="https://discord.gg/HkbYEGybGv"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rose-300 underline-offset-4"
              >
                Discord Community
              </a>{" "}
              to discuss new features, bugs or any other topic.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://github.com/360macky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-rose-300 underline-offset-4"
                >
                  Marcelo Arias @360macky
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://github.com/Puiching-Memory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-rose-300 underline-offset-4"
                >
                  梦归云帆 @Puiching-Memory
                </a>{" "}
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="bg-white md:flex dark:bg-neutral-900 border border-t-neutral-200 dark:border-t-neutral-800 border-transparent mt-12">
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
