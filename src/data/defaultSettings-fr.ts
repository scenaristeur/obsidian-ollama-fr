import { OllamaSettings } from "model/OllamaSettings";

export const DEFAULT_SETTINGS: OllamaSettings = {
  ollamaUrl: "http://localhost:11434",
  commands: [
    {
      name: "Résumer la sélection",
      prompt:
        "Agir comme un écrivain. Résumez le texte dans une vue en phrases mettant en évidence les principaux points à retenir. Sortez uniquement le texte et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel.",
      model: "llama2",
    },
    {
      name: "Expliquer la sélection",
      prompt:
        "Agir comme un écrivain. Expliquez le texte en termes simples et concis en gardant le même sens. Sortez uniquement le texte et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel.",
      model: "llama2",
    },
    {
      name: "Élargir la sélection",
      prompt:
        "Agir comme un écrivain. Développez le texte en ajoutant plus de détails tout en gardant le même sens. Sortez uniquement le texte et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel.",
      model: "llama2",
    },
    {
      name: "Réécrire la selection (de manière formelle)",
      prompt:
        "Agir comme un écrivain. Réécrivez le texte dans un style plus formel tout en gardant le même sens. Sortez uniquement le texte et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel.",
      model: "llama2",
    },
    {
      name: "Réécrire la selection (de manière désinvolte)",
      prompt:
        "Agir comme un écrivain. Réécrivez le texte dans un style plus décontracté tout en gardant le même sens. Sortez uniquement le texte et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel.",
      model: "llama2",
    },
    {
      name: "Réécrire la selection (de manière active)",
      prompt:
        "Agir comme un écrivain. Réécrivez le texte à voix active tout en gardant le même sens. Sortez uniquement le texte et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel.",
      model: "llama2",
    },
    {
      name: "Réécrire la selection (liste à puces)",
      prompt:
        "Agir comme un écrivain. Réécrivez le texte sous forme de liste à puces tout en gardant le même sens. Sortez uniquement le texte et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel.",
      model: "llama2",
    },
    {
      name: "Légender la sélection",
      prompt:
        "Agir comme un écrivain. Créez un seul titre pour l’ensemble du texte qui donne une bonne compréhension de ce à quoi le lecteur peut s’attendre. Affichez uniquement la légende et rien d'autre, ne discutez pas, pas de préambule, allez à l'essentiel. Votre format doit être ## Légende.",
      model: "llama2",
    },
  ],
};
