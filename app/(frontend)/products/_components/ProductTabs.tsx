"use client";

import { useState, useEffect, useRef } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

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
  productName: string;
};

type ModalProps = {
  productName: string;
  productCode?: string | null;
  onClose: () => void;
};

type FormState = "idle" | "loading" | "success" | "error";

function EnquiryModal({ productName, productCode, onClose }: ModalProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName:    fd.get("fullName"),
          email:       fd.get("email"),
          phone:       fd.get("phone"),
          company:     fd.get("company"),
          country:     fd.get("country"),
          productName,
          productCode: productCode ?? undefined,
          quantity:    fd.get("quantity"),
          message:     fd.get("message"),
        }),
      });

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Submission failed.");
      }

      setState("success");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setState("error");
    }
  }

  return (
    /* Overlay */
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        animation: "fadeIn 0.18s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(24px); opacity:0 } to { transform:translateY(0); opacity:1 } }
        .enq-input {
          width: 100%;
          padding: 10px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          color: #1a202c;
          background: #fff;
          transition: border-color 0.15s;
          outline: none;
          box-sizing: border-box;
        }
        .enq-input:focus { border-color: #27684A; box-shadow: 0 0 0 3px rgba(39,104,74,0.12); }
        .enq-input::placeholder { color: #a0aec0; }
        .enq-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 5px;
          letter-spacing: 0.03em;
        }
        .enq-required { color: #27684A; margin-left: 2px; }
      `}</style>

      {/* Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          width: "100%",
          maxWidth: 560,
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
          animation: "slideUp 0.22s ease",
        }}
      >
        {/* Card Header */}
        <div style={{
          background: "#0f1a14",
          borderRadius: "16px 16px 0 0",
          padding: "24px 28px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
        }}>
          <div>
            <p style={{ margin: 0, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#27684A", marginBottom: 4 }}>
              Product Enquiry
            </p>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
              {productName}
            </h2>
            {productCode && (
              <p style={{ margin: "4px 0 0", fontSize: 12, color: "#6b8f7a" }}>Code: {productCode}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              padding: 6,
              display: "flex",
              color: "#fff",
              flexShrink: 0,
              transition: "background 0.15s",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 28px 32px" }}>
          {state === "success" ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <CheckCircle2 size={52} color="#27684A" style={{ margin: "0 auto 16px" }} />
              <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700, color: "#0f1a14" }}>
                Enquiry Sent!
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
                Thank you. We've received your enquiry and will get back to you shortly.
              </p>
              <button
                onClick={onClose}
                style={{
                  marginTop: 24,
                  padding: "10px 28px",
                  background: "#27684A",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Two-column on wider screens */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="enq-label">Full Name <span className="enq-required">*</span></label>
                  <input name="fullName" required className="enq-input" placeholder="Jane Smith" />
                </div>

                <div>
                  <label className="enq-label">Email <span className="enq-required">*</span></label>
                  <input name="email" type="email" required className="enq-input" placeholder="jane@company.com" />
                </div>

                <div>
                  <label className="enq-label">Phone</label>
                  <input name="phone" type="tel" className="enq-input" placeholder="+1 555 000 000" />
                </div>

                <div>
                  <label className="enq-label">Company / Organization</label>
                  <input name="company" className="enq-input" placeholder="Acme Corp." />
                </div>

                <div>
                  <label className="enq-label">Country</label>
                  <input name="country" className="enq-input" placeholder="United States" />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="enq-label">Estimated Quantity</label>
                  <input name="quantity" className="enq-input" placeholder="e.g. 500 units" />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="enq-label">Message / Additional Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="enq-input"
                    placeholder="Describe your specific requirements, customisation needs, delivery timeline…"
                    style={{ resize: "vertical", lineHeight: 1.6 }}
                  />
                </div>
              </div>

              {state === "error" && (
                <div style={{
                  marginTop: 14,
                  padding: "10px 14px",
                  background: "#fff5f5",
                  border: "1px solid #fed7d7",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "#c53030",
                }}>
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                style={{
                  marginTop: 22,
                  width: "100%",
                  padding: "13px 20px",
                  background: state === "loading" ? "#4e9e77" : "#27684A",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: state === "loading" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "background 0.2s",
                  letterSpacing: "0.02em",
                }}
              >
                {state === "loading" ? (
                  <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Sending…</>
                ) : "Send Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </div>
  );
}

export default function ProductTabs({
  description,
  highlights,
  specifications,
  productName,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "highlights" | "specifications">("description");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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

        {/* ── Enquire Now Button ── */}
        <button
          onClick={() => setShowModal(true)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 28px",
            background: "#27684A",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.03em",
            transition: "opacity 0.18s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Enquire Now
        </button>
      </div>

      {showModal && (
        <EnquiryModal
          productName={productName}
          productCode={specifications.code}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
