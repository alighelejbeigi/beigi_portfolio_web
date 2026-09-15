"use client";
import React, { useState } from "react";
import { X, Send, CheckCircle2, Mail } from "lucide-react";
import { Language } from "../types";
import { getTranslation } from "../i18n/translations";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  darkMode: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  language,
  darkMode,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const t = (key: string) => getTranslation(language, key);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Open mail client with prefilled mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.open(
      `mailto:ghelejbeigiali@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );

    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity">
      <div
        className={`relative w-full max-w-lg rounded-2xl border shadow-2xl p-6 sm:p-8 ${
          darkMode
            ? "bg-[#07111a] border-slate-800 text-slate-100"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full transition-colors ${
            darkMode
              ? "hover:bg-slate-800 text-slate-400"
              : "hover:bg-slate-100 text-slate-600"
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-[#20b2aa]/10 text-[#20b2aa] rounded-xl">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold">{t("contact_modal.title")}</h3>
        </div>
        <p className="text-xs text-slate-400 mb-6">
          {t("contact_modal.subtitle")}
        </p>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#20b2aa] mx-auto animate-bounce" />
            <h4 className="text-lg font-bold">{t("contact_modal.success")}</h4>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#20b2aa] text-white text-xs font-bold rounded-lg hover:bg-[#179b94] transition-colors"
            >
              {t("contact_modal.close")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                {t("contact_modal.name")}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[#20b2aa] ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-600"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                {t("contact_modal.email")}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. john@example.com"
                className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[#20b2aa] ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-600"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                {t("contact_modal.message")}
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello Ali, I'm interested in working together..."
                className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[#20b2aa] ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-600"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#20b2aa] hover:bg-[#179b94] text-white font-bold text-sm rounded-lg transition-all shadow-lg shadow-[#20b2aa]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Send className="w-4 h-4" />
              <span>{t("contact_modal.send")}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
