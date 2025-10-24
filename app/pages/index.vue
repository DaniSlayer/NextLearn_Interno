<template>
  <section class="welcome">
    <div class="inner">
      <div class="hero">
        <div class="logo" aria-hidden>NL</div>
        <h1 class="headline">NEXTLEARN</h1>
        <p class="tagline">Recursos educativos curados • Aprende con propósito</p>

        <div class="cta-row">
          <button class="btn-primary" @click="goExplore">Explorar la plataforma</button>
          <a class="btn-ghost" href="#" @click.prevent="openAbout">Sobre NEXTLEARN</a>
        </div>
      </div>

      <aside class="accent-band" aria-hidden>
        <div class="accent-dot" />
      </aside>

      <footer class="footer">
        <small>© {{ year }} NEXTLEARN — Universidad de Córdoba</small>
      </footer>
    </div>
  </section>
</template>

<script setup>
if (typeof definePageMeta !== 'undefined') {
  definePageMeta({ layout: 'welcome' }) // layout que enlaza al resto de la app
}

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const year = new Date().getFullYear()
const router = useRouter()

function goExplore() {
  router.push({ name: 'explorar' }).catch(() => {})
}

function openAbout(){
  alert('NEXTLEARN — Una colección curada de recursos didácticos.')
}
</script>

<style scoped>
:root{
  --bg: #fbfbfb;        /* paper */
  --text: #0f1724;      /* charcoal */
  --muted: #6b7280;     /* slate */
  --accent: #2563eb;    /* indigo */
  --accent-2: #06b6d4;  /* teal */
  --btn-text: #041024;  /* dark for contrast */
}

*{box-sizing:border-box}

.welcome{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background: radial-gradient(1200px 600px at 8% 12%, rgba(37,99,235,0.06), transparent 8%),
              radial-gradient(800px 400px at 92% 88%, rgba(6,182,212,0.04), transparent 10%),
              var(--bg);
  color:var(--text);
  padding:48px 20px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.inner{
  width:100%;
  max-width:980px;
  background: transparent;
  border-radius:18px;
  padding:36px;
  display:flex;
  flex-direction:column;
  gap:26px;
  align-items:center;
}

.hero{
  text-align:center;
  max-width:760px;
}

.logo{
  width:72px;
  height:72px;
  border-radius:14px;
  display:inline-grid;
  place-items:center;
  font-weight:700;
  color: white;
  background: linear-gradient(135deg,var(--accent),var(--accent-2));
  font-size:20px;
  box-shadow: 0 12px 30px rgba(37,99,235,0.12);
  margin:0 auto 18px auto;
}

.headline{
  margin:0 0 8px 0;
  font-size:clamp(32px, 5.6vw, 48px);
  letter-spacing:-0.02em;
  line-height:1;
  background: linear-gradient(90deg,var(--accent),var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.tagline{
  margin:0 0 20px 0;
  color:var(--muted);
  font-size:1.05rem;
}

.cta-row{
  display:flex;
  gap:12px;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
}

.btn-primary{
  border: none;
  padding:12px 18px;
  border-radius:12px;
  font-weight:600;
  cursor:pointer;
  background: linear-gradient(90deg,var(--accent),var(--accent-2));
  color: var(--btn-text);
  box-shadow: 0 10px 30px rgba(37,99,235,0.12);
  transition: transform .16s ease, box-shadow .16s ease, background .12s ease, color .12s ease;
}

/* Hover distinto: invertir colores, añadir borde sutil y glow */
.btn-primary:hover{
  transform: translateY(-4px) scale(1.02);
  background: linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0.98));
  color: var(--accent);
  box-shadow: 0 18px 48px rgba(6,182,212,0.12), 0 6px 18px rgba(37,99,235,0.06);
  border: 1px solid rgba(6,182,212,0.12);
}

.btn-ghost{
  color:var(--muted);
  text-decoration: none;
  border-radius: 10px;
  padding:10px 14px;
  border:1px solid rgba(15,23,36,0.04);
  background: rgba(10,12,14,0.01);
  cursor:pointer;
  transition: color .12s ease, transform .12s ease;
}
.btn-ghost:hover{ color: var(--accent); transform: translateY(-2px) }

.accent-band{
  width:100%;
  display:flex;
  justify-content:center;
}

.accent-dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background: linear-gradient(90deg,var(--accent),var(--accent-2));
  box-shadow: 0 8px 24px rgba(6,182,212,0.08);
  transform-origin:center;
  animation: float 5s ease-in-out infinite;
}

@keyframes float{
  0%{ transform: translateY(0) scale(1) }
  50%{ transform: translateY(-10px) scale(1.06) }
  100%{ transform: translateY(0) scale(1) }
}

.footer{ color:var(--muted); font-size:0.9rem; text-align:center }

@media (max-width:640px){
  .inner{ padding:22px }
  .headline{ font-size:28px }
}
</style>