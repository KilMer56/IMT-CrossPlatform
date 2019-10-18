export const AJOUTER_LIVRE = 'AJOUTER_LIVRE'
export const SUPPRIMER_LIVRE = 'SUPPRIMER_LIVRE'

export const ajouterLivre = (livre) => {
    return {
        type: AJOUTER_LIVRE,
        livre
    }
}

export const supprimerLivre = (livre) => {
  return {
      type: SUPPRIMER_LIVRE,
      livre
  }
}