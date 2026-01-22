module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nouvelle fonctionnalité
        'fix', // Correction de bug
        'docs', // Documentation
        'style', // Formatage, point-virgules manquants, etc.
        'refactor', // Refactoring du code
        'perf', // Amélioration des performances
        'test', // Ajout de tests
        'chore', // Maintenance (dépendances, config, etc.)
        'revert', // Annulation d'un commit précédent
        'build', // Changements affectant le build
        'ci', // Changements CI/CD
      ],
    ],
    'subject-case': [0], // Permet toutes les casses pour le sujet
  },
};
