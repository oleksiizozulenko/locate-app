import { locateApp } from '../locateApp';

export function locateVSCode(): Promise<string> {
    return locateApp({
        appName: 'Code',
        linuxWhich: 'code',
        windowsSuffix: '\\Microsoft VS Code\\Code.exe',
        macOsName: 'Visual Studio Code',
        macOsPackageName: 'Visual Studio Code',
        macOsExecName: 'Electron',
    });
}
