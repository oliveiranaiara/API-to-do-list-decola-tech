{ pkgs }: {
  deps = [
    pkgs.maven
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}
