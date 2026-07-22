"use client";

import { motion } from "motion/react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Monogram } from "./Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ============================ Dashboard ============================ */
export function DashboardMock() {
  const kpis = [
    { label: "Receita", value: "R$ 4,2M", delta: "▲ 12%" },
    { label: "Margem", value: "28,6%", delta: "▲ 2,1pp" },
    { label: "Ticket médio", value: "R$ 1.850", delta: "▲ 5%" },
    { label: "Metas", value: "92%", delta: "no trilho", hot: true },
  ];
  const bars = [38, 44, 40, 52, 58, 66, 78, 92];

  return (
    <div className="glass w-full rounded-2xl p-5 ring-glow">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-snow">
          Painel da Diretoria
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-electric">
          <span className="size-1.5 animate-pulse rounded-full bg-electric" />
          Tempo real
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className={`rounded-xl border p-3 ${
              k.hot
                ? "border-electric/40 bg-electric/10"
                : "border-line bg-surface/60"
            }`}
          >
            <p className="text-[0.7rem] text-text-dim">{k.label}</p>
            <p className="mt-1 text-lg font-semibold text-snow">{k.value}</p>
            <p className="text-[0.68rem] font-medium text-electric">{k.delta}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-line bg-surface/60 p-4">
        <div className="mb-3 flex items-center gap-2 text-xs text-text-dim">
          <TrendingUp className="size-3.5 text-electric" />
          Receita: últimos 8 meses
        </div>
        <div className="flex h-24 items-end gap-2">
          {bars.map((b, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${b}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.05, ease: EASE }}
              className="flex-1 rounded-t bg-gradient-to-t from-electric/30 to-electric"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================ do.thus IA ============================ */
export function AiChatMock() {
  const bars = [
    { h: 72, ok: true, l: "Fin." },
    { h: 80, ok: true, l: "Oper." },
    { h: 44, ok: false, l: "Com." },
    { h: 76, ok: true, l: "Mkt." },
  ];
  return (
    <div className="glass w-full max-w-md rounded-2xl p-5 ring-glow">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-snow">
          <Monogram className="w-4 text-snow" /> do.thus IA
        </span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400" /> online
        </span>
      </div>

      <div className="flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[80%] rounded-2xl rounded-tr-sm bg-electric px-4 py-2.5 text-sm font-medium text-carbon"
        >
          Qual área está abaixo da meta este mês?
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-3 rounded-2xl rounded-tl-sm border border-line bg-surface/70 p-4"
      >
        <p className="text-sm leading-relaxed text-text">
          O time <strong className="text-snow">Comercial</strong> está{" "}
          <strong className="text-snow">8% abaixo</strong> da meta, puxado pela
          região Sul. Ticket médio caiu 4%.
        </p>
        <div className="mt-4">
          <div className="flex h-16 items-end gap-2">
            {bars.map((b, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${b.h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                className={`flex-1 rounded ${
                  b.ok ? "bg-emerald-400/80" : "bg-rose-400/80"
                }`}
              />
            ))}
          </div>
          <div className="mt-1 flex gap-2">
            {bars.map((b, i) => (
              <span
                key={i}
                className="flex-1 text-center text-[0.6rem] text-text-faint"
              >
                {b.l}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs font-medium text-electric">
          • Alerta: revisar pipeline da região Sul.
        </p>
      </motion.div>

      <div className="mt-3 flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2.5">
        <span className="text-sm text-text-faint">Pergunte sobre o seu negócio…</span>
        <span className="ml-auto flex size-7 items-center justify-center rounded-full bg-electric text-carbon">
          <ArrowRight className="size-4" />
        </span>
      </div>
    </div>
  );
}

/* ============================ Automações ============================ */
export function AutomationMock() {
  const rows = [
    { title: "Relatório semanal", sub: "Toda segunda, 8h → e-mail para a diretoria.", tag: "Ativo", ok: true },
    { title: "Estoque baixo", sub: "Nível abaixo do mínimo → alerta para o time.", tag: "Ativo", ok: true },
    { title: "Meta em risco", sub: "Desvio acima de 5% → notifica o gestor.", tag: "Monitorando", ok: false },
  ];
  return (
    <div className="glass w-full max-w-md rounded-2xl p-5 ring-glow">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-snow">
          <Monogram className="w-4 text-snow" /> Automações
        </span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400" /> ativo
        </span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface/60 p-3"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-electric text-carbon">
              <ArrowRight className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-snow">{r.title}</p>
              <p className="truncate text-xs text-text-dim">{r.sub}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold ${
                r.ok
                  ? "bg-emerald-400/15 text-emerald-300"
                  : "bg-electric/15 text-electric"
              }`}
            >
              {r.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
