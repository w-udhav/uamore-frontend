import React from "react";
import policies from "../data/policies";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import PageHeaders from "../components/ui/PageHeaders";

export default function PolicyPage({ policyKey }) {
  const policy = policies[policyKey];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainLayout className="mt-24 max-w-5xl mx-auto">
        <PageHeaders title={policy.title} />
        <div className="min-h-svh">
          {policy.sections.map((section, index) => (
            <div key={index} className="mt-4 flex flex-col gap-5">
              <p className="font-satoshi-medium">{section.title}</p>
              {Array.isArray(section.content) ? (
                <ul className="list-disc ml-5">
                  {section.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[18px]">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </MainLayout>
    </motion.div>
  );
}
