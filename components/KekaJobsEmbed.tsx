// components/KekaJobsEmbed.tsx

"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

const KEKA_IDENTIFIER = "dc06d700-93f6-44b0-bc8c-3c1b3fffa92b";
const KEKA_DOMAIN = "https://elevrosolutions.keka.com/careers/";
const KEKA_CONTAINER_ID = "khembedjobs";
const KEKA_SCRIPT_ID = "keka-embed-jobs-script";

type KhWindow = Window & {
  khConfig?: {
    identifier: string;
    domain: string;
    targetContainer: string;
  };
};

export default function KekaJobsEmbed() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const container = document.getElementById(KEKA_CONTAINER_ID);

    if (container) {
      container.innerHTML = "";
    }

    const existingScript = document.getElementById(KEKA_SCRIPT_ID);
    if (existingScript) {
      existingScript.remove();
    }

    (window as KhWindow).khConfig = {
      identifier: KEKA_IDENTIFIER,
      domain: KEKA_DOMAIN,
      targetContainer: `#${KEKA_CONTAINER_ID}`,
    };

    const script = document.createElement("script");
    script.id = KEKA_SCRIPT_ID;
    script.src = `${KEKA_DOMAIN}api/embedjobs/js/${KEKA_IDENTIFIER}`;
    script.defer = true;

    script.onload = () => {
      setStatus("ready");
    };

    script.onerror = () => {
      setStatus("error");
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="keka-jobs-theme surface-panel relative overflow-hidden rounded-4xl border border-white/10 p-4 shadow-soft md:p-6"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/20 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 left-16 h-80 w-80 rounded-full bg-[#6f4b83]/20 blur-[110px]" />

      {status === "loading" ? (
        <div className="absolute inset-0 z-20 grid min-h-70 place-items-center bg-[#17091e]/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-cream/70">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading open positions...
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="relative z-20 rounded-3xl border border-red-400/20 bg-red-400/10 p-6 text-red-100">
          Keka jobs could not load. Please check the embed script or careers
          portal access.
        </div>
      ) : null}

      <div id={KEKA_CONTAINER_ID} className="relative z-10 min-h-70" />
    </motion.div>
  );
}
