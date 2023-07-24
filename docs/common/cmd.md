---
sidebar_position: 2
title: Командная строка Windows/Linux
description: Базовые команды в командной строке на Windows&Linux.
#slug: /test/1
sidebar_label: 'Командная строка (CMD)'
tags:
  - База
  - Windows
  - Linux
  - CMD
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import osstyles from '@site/src/css/os.module.css';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import TOCInline from '@theme/TOCInline';
import CodeBlock from '@theme/CodeBlock';
import OSImage from '@site/src/components/OSImage';
```

<!-- # Базовый терминал (CMD) -->

<TOCInline toc={toc} />

## Командная строка (CMD)

:::info
**Командная строка** – это интерфейс взаимодействия пользователя с компьютером, в котором команды отдаются путем ввода текстовых строк при помощи клавиатуры. История появления командной строки восходит к временам компьютерных терминалов, которые вовсе не имели дисплеев, вывод информации производился на печатную ленту. Позже, с появлением мониторов, командная строка приобрела свой современный вид, все вводимые команды и их результат стали отражаться на экране компьютера.
:::

### Смена директории

Для <OSImage os="windows"/>&<OSImage os="linux"/> команда абсолютно одинаковая:

```bash
cd [путь/название]
```

### Просмотр директории

<Tabs>
<TabItem value="ViewFolder_Windows" label="Windows" attributes={{className: osstyles.windows}} default>

<CodeBlock
    language="powershell">
    dir
</CodeBlock>

</TabItem>
<TabItem value="ViewFolder_Linux" label="Linux" attributes={{className: osstyles.linux}}>

<CodeBlock
    language="bash">
    ls
</CodeBlock>

</TabItem>
</Tabs>

### Создание директории

Для <OSImage os="windows"/>&<OSImage os="linux"/> команда абсолютно одинаковая:

```bash
mkdir [путь/название]
```