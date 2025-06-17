<#
.SYNOPSIS
    运行指定语言的代码文件
.DESCRIPTION
    根据语言类型和文件名运行对应的代码文件，使用config.json中配置的执行命令
.PARAMETER FileName
    要运行的文件名（不含扩展名）
.EXAMPLE
    .\Run.ps1 hello-world
    # 默认运行 typescript/hello-world.ts 文件
.EXAMPLE
    .\Run.ps1 -js hello-world
    # 运行 javascript/hello-world.js 文件
.EXAMPLE
    .\Run.ps1 -py hello-world
    # 运行 python/hello_world.py 文件
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0, ValueFromPipeline = $true)]
    [string]$FileName
)

DynamicParam {
    try {
        # 导入抽象模块
        $scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
        Import-Module "$scriptRoot\module\Create-Script.psm1" -Force
        
        # 使用抽象函数创建动态参数
        return New-LanguageDynamicParameters
    }
    catch {
        Write-Verbose "创建动态参数失败: $($_.Exception.Message)"
        return New-Object System.Management.Automation.RuntimeDefinedParameterDictionary
    }
}

Process {
    # 严格模式，提高代码质量
    Set-StrictMode -Version Latest
    
    try {
        # 导入抽象模块
        $scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
        Import-Module "$scriptRoot\module\Create-Script.psm1" -Force
        
        # 使用抽象函数执行运行操作
        Invoke-ScriptAction -FileName $FileName -BoundParameters $PSBoundParameters -ScriptAction "run"
    }
    catch {
        Write-Error "运行文件失败: $($_.Exception.Message)"
        exit 1
    }
}
