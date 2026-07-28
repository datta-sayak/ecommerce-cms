"use client";

import { useState } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

type Specifications = {
  code?: string | null;
  fabric?: string | null;
  height: number;
  width: number;
  weight?: number | null;
  unit: string;
  category?: string | null;
};

type ProductTabsProps = {
  description: any | string;
  highlights?: any | null;
  specifications: Specifications;
};

export default function ProductTabs({
  description,
  highlights,
  specifications,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "highlights" | "specifications">("description");

  return (
    <div className="mt-8 w-full max-w-2xl">
      <div className="flex flex-wrap border-b border-gray-200">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "description"
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("highlights")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "highlights"
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
          }`}
        >
          Product Highlights
        </button>
        <button
          onClick={() => setActiveTab("specifications")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "specifications"
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
          }`}
        >
          Specifications
        </button>
      </div>

      <div className="py-6 text-sm text-gray-800 leading-relaxed">
        {activeTab === "description" && (
          <div className="prose prose-sm max-w-none text-black
            prose-headings:font-bold
            prose-ul:list-disc prose-ol:list-decimal
            prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-code:before:content-none prose-code:after:content-none
            prose-code:rounded prose-code:bg-orange-100 prose-code:px-2 prose-code:py-0.5 prose-code:text-orange-700 prose-code:font-medium
          ">
            {typeof description === "string" ? (
              <div className="whitespace-pre-wrap">{description}</div>
            ) : description && Object.keys(description).length > 0 ? (
              <RichText data={description} />
            ) : null}
          </div>
        )}

        {activeTab === "highlights" && (
          <div className="prose prose-sm max-w-none text-black
            prose-headings:font-bold
            prose-ul:list-disc prose-ol:list-decimal
            prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-code:before:content-none prose-code:after:content-none
            prose-code:rounded prose-code:bg-orange-100 prose-code:px-2 prose-code:py-0.5 prose-code:text-orange-700 prose-code:font-medium
          ">
            {highlights && Object.keys(highlights).length > 0 ? (
              <RichText data={highlights} />
            ) : (
              <p className="text-gray-500">No highlights available.</p>
            )}
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="space-y-4 max-w-md">
            {specifications.code && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Product Code</span>
                <span className="font-medium text-black">{specifications.code}</span>
              </div>
            )}
            {specifications.category && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Category</span>
                <span className="font-medium text-black">{specifications.category}</span>
              </div>
            )}
            {specifications.fabric && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Fabric</span>
                <span className="font-medium text-black">{specifications.fabric}</span>
              </div>
            )}
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-500">Dimensions</span>
              <span className="font-medium text-black">
                H {specifications.height} x W {specifications.width} {specifications.unit}
              </span>
            </div>
            {specifications.weight && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Weight</span>
                <span className="font-medium text-black">
                  {specifications.weight} gm
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
