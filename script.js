async function copiarPix() {
      const campo = document.getElementById("pixKey");
      const status = document.getElementById("copyStatus");
      const chave = campo.value.trim();

      if (!chave || chave === "INSIRA_A_CHAVE_PIX_OFICIAL") {
        status.textContent = "A organização ainda precisa inserir a chave Pix oficial.";
        return;
      }

      try {
        await navigator.clipboard.writeText(chave);
        status.textContent = "Chave Pix copiada!";
      } catch (erro) {
        campo.focus();
        campo.select();
        status.textContent = "Não foi possível copiar automaticamente. Selecione e copie a chave manualmente.";
      }
    }
