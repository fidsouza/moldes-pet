'use client';
import { useEffect, useState } from 'react';

export default function PwaRegister() {
  const [deferred, setDeferred] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/pet-atelie/app/sw.js').catch(() => {});
    }
    const onPrompt = (e) => {
      e.preventDefault();
      setDeferred(e);
      try { if (!sessionStorage.getItem('inst-x')) setShow(true); } catch { setShow(true); }
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onPrompt);
  }, []);

  const install = async () => {
    if (!deferred) return;
    deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setShow(false);
  };
  const dismiss = () => {
    setShow(false);
    try { sessionStorage.setItem('inst-x', '1'); } catch {}
  };

  if (!show) return null;
  return (
    <div className="install-banner">
      <div style={{ fontSize: 24 }}>📲</div>
      <div className="ib-txt">
        <b>Instale o app</b>
        Acesse seus moldes direto da tela inicial.
      </div>
      <button className="ib-go" onClick={install}>Instalar</button>
      <button className="ib-x" onClick={dismiss} aria-label="Fechar">×</button>
    </div>
  );
}
