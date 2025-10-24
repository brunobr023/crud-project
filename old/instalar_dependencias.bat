REM ================================================
REM Script: instalar_dependencias.bat
REM Autor: Bruno
REM Versão: 1.0
REM Data: 18/10/2025
REM Descrição: Instala dependencias e configura ambiente Node.js
REM ================================================

@echo off
setlocal

echo(
echo ================================================
echo Instalando dependencias do projeto CRUD_GAMT
echo ================================================
echo(

REM Verifica se o Node.js está instalado
node -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERRO: Node.js nao encontrado.
    echo Instale Node.js em: https://nodejs.org/pt e execute este script novamente.
    pause
    exit /b 1
)

REM Mostra na tela as informações do node.js
for /f "delims=" %%v in ('node -v') do set NODE_VERSION=%%v
for /f "delims=" %%v in ('npm -v') do set NPM_VERSION=%%v

echo Node: %NODE_VERSION%
echo npm:  %NPM_VERSION%
echo(

REM Verifica se package.json existe e instala dependencias
if exist package.json (
    echo package.json encontrado. Executando: npm install
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ERRO: npm install falhou.
        pause
        exit /b 1
    )
) else (
    echo ERRO: package.json nao encontrado no diretorio atual.
    pause
    exit /b 1
)

echo npm install finalizado com sucesso.
pause

echo ================================================
echo Todas as etapas concluidas com sucesso!
echo Para iniciar o servidor, use: npm start
echo ================================================
pause

endlocal
exit /b 0