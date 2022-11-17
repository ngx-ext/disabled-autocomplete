import { Rule, Tree } from '@angular-devkit/schematics';
import { RootModule } from '@ngx-ext/schematics-api';

export function addImportToRootModule(): Rule {
  return (tree: Tree) => {
    const rootModule = RootModule.getInstance(tree, '@ngx-ext/disabled-autocomplete');
    rootModule.addImport('DisabledAutocompleteModule');
    return rootModule.applyAllChanges();
  };
}
