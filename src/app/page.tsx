import Image from "next/image";
import React from "react";
import { greeting } from "@/app/config";
import SocialMedia from "@/components/social-media";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
              >
                <span>I'm </span>
                <span>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
