---
sidebar_position: 2
title: Виртуальное окружение Python
description: Виртуальное окружение python.
#slug: /test/1
sidebar_label: 'Виртуальное окружение (venv)'
tags:
  - База
  - python
  - venv
  - виртуальное окружение
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/os.module.css';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import TOCInline from '@theme/TOCInline';
import OSImage from '@site/src/components/OSImage';
```

<!-- # Базовые действия python -->

<TOCInline toc={toc} />

## Виртуальное окружение (venv)

:::info
**Виртуальное окружение (virtual environment)** — это каталог, в который устанавливаются некоторые исполняемые файлы и скрипты. Среди файлов есть python для выполнения скриптов и pip для установки других модулей в окружении.
:::

### Создание venv

```bash title="Cоздание виртуального окружения"
python -m venv .venv
```

Где:
- ``-m`` - обозначает режим запуска библиотеки python.
- ``venv`` - сам модуль.
- ``.venv`` - каталог, который будет создан с окружением.

### Активация venv {#activate-venv}

<Tabs>
  <TabItem value="LinuxActivate" label="Linux" attributes={{className: styles.linux}} default>

    source ./.venv/bin/activate

  </TabItem>
  <TabItem value="WindowsActivate" label="Windows" attributes={{className: styles.windows}}>

    .\venv\Scripts\Activate.ps1

  </TabItem>
</Tabs>

### Деактивация venv

Для <OSImage os="windows"/>&<OSImage os="linux"/> команда абсолютно одинаковая:

```bash
deactivate
```

### Список библиотек (venv)

<Admonition type="caution">
<p>
  Подразумевается использование активного <Link to="#activate-venv"><b>venv</b></Link>. При выполнении вне виртуальной среды могут быть подтянуты лишние пакеты, не связанные с локальной средой разработки!
</p>
</Admonition>

<Tabs>
  <TabItem value="Venvview" label="Обычный просмотр" default>

    pip freeze

  </TabItem>
  <TabItem value="Venvfreeze" label="requirements.txt">

    pip freeze > requirements.txt

  </TabItem>
</Tabs>