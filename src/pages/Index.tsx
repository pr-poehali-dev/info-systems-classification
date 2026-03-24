import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    type: "title",
    content: {
      title: "Классификация информационных систем",
      subtitle: "Классификация персональных компьютеров",
      label: "Учебная презентация по информатике",
      author: "Хусаинов Айгиз Айдарович",
      meta: "2026 год",
    },
  },
  {
    id: 2,
    type: "intro",
    content: {
      section: "Введение",
      title: "Цель и задачи",
      goal: "Систематизировать знания о видах информационных систем и типах персональных компьютеров.",
      tasks: [
        "Рассмотреть основные классификации информационных систем",
        "Изучить виды персональных компьютеров",
        "Понять, как тип компьютера влияет на работу с информационными системами",
      ],
      relevance:
        "Понимание классификаций помогает выбирать подходящие инструменты для решения задач.",
    },
  },
  {
    id: 3,
    type: "definition",
    content: {
      section: "Основные понятия",
      title: "Что такое информационная система?",
      definition:
        "Информационная система (ИС) — это совокупность средств, методов и процедур сбора, хранения, обработки и передачи информации.",
      components: [
        { icon: "Cpu", label: "Аппаратное обеспечение" },
        { icon: "Code2", label: "Программное обеспечение" },
        { icon: "Database", label: "Данные" },
        { icon: "Users", label: "Персонал" },
        { icon: "GitBranch", label: "Процессы" },
      ],
      examples: "Банковские системы, CRM, ERP, библиотечные каталоги",
    },
  },
  {
    id: 4,
    type: "classification",
    content: {
      section: "Классификация ИС",
      title: "По масштабу",
      items: [
        {
          tag: "01",
          name: "Персональные",
          desc: "Для одного пользователя",
          example: "Личный органайзер",
          color: "#e8f4fd",
          accent: "#2563eb",
        },
        {
          tag: "02",
          name: "Групповые",
          desc: "Для коллектива",
          example: "Система документооборота отдела",
          color: "#f0fdf4",
          accent: "#16a34a",
        },
        {
          tag: "03",
          name: "Корпоративные",
          desc: "Для всей организации",
          example: "ERP-система предприятия",
          color: "#fdf4ff",
          accent: "#9333ea",
        },
      ],
    },
  },
  {
    id: 5,
    type: "classification",
    content: {
      section: "Классификация ИС",
      title: "По сфере применения",
      items: [
        {
          tag: "Эк",
          name: "Экономические",
          desc: "Бухгалтерские, финансовые системы",
          example: "1С:Бухгалтерия",
          color: "#fff7ed",
          accent: "#ea580c",
        },
        {
          tag: "Ад",
          name: "Административные",
          desc: "Системы управления персоналом",
          example: "HR-платформа",
          color: "#f0f9ff",
          accent: "#0284c7",
        },
        {
          tag: "На",
          name: "Научные",
          desc: "Обработка экспериментальных данных",
          example: "Лабораторные системы",
          color: "#fefce8",
          accent: "#ca8a04",
        },
        {
          tag: "ГИС",
          name: "Географические",
          desc: "Карты, системы навигации",
          example: "Яндекс.Карты",
          color: "#f0fdf4",
          accent: "#16a34a",
        },
        {
          tag: "Мед",
          name: "Медицинские",
          desc: "Электронные истории болезни",
          example: "EMIAS",
          color: "#fdf2f8",
          accent: "#db2777",
        },
      ],
    },
  },
  {
    id: 6,
    type: "classification3",
    content: {
      section: "Классификация ИС",
      title: "По характеру обработки данных",
      items: [
        {
          icon: "Zap",
          name: "Оперативные (транзакционные)",
          desc: "Обработка текущих операций в реальном времени",
          example: "Кассовые системы",
          tag: "OLTP",
        },
        {
          icon: "BarChart3",
          name: "Аналитические",
          desc: "Поддержка принятия стратегических решений",
          example: "BI-системы",
          tag: "OLAP",
        },
        {
          icon: "Layers",
          name: "Гибридные",
          desc: "Сочетают оба подхода одновременно",
          example: "CRM с аналитикой продаж",
          tag: "Mixed",
        },
      ],
    },
  },
  {
    id: 7,
    type: "classification3",
    content: {
      section: "Классификация ИС",
      title: "По степени автоматизации",
      items: [
        {
          icon: "Hand",
          name: "Ручные",
          desc: "Все операции выполняет человек",
          example: "Бумажный архив",
          tag: "Manual",
        },
        {
          icon: "SlidersHorizontal",
          name: "Автоматизированные",
          desc: "Часть операций автоматизирована",
          example: "Учёт товаров со сканером",
          tag: "Semi-Auto",
        },
        {
          icon: "Bot",
          name: "Автоматические",
          desc: "Полная автоматизация без участия человека",
          example: "Роботизированные склады",
          tag: "Auto",
        },
      ],
    },
  },
  {
    id: 8,
    type: "definition",
    content: {
      section: "Персональные компьютеры",
      title: "Что такое персональный компьютер?",
      definition:
        "ПК — это универсальное вычислительное устройство для индивидуального использования, выполняющее широкий спектр задач.",
      components: [
        { icon: "Cpu", label: "Процессор" },
        { icon: "MemoryStick", label: "Оперативная память" },
        { icon: "HardDrive", label: "Жёсткий диск / SSD" },
        { icon: "CircuitBoard", label: "Материнская плата" },
        { icon: "Monitor", label: "Периферийные устройства" },
      ],
      examples: "",
    },
  },
  {
    id: 9,
    type: "pc-form",
    content: {
      section: "Классификация ПК",
      title: "По форм-фактору",
      items: [
        {
          icon: "Monitor",
          name: "Настольные (Desktop)",
          desc: "Системный блок + монитор раздельно",
        },
        {
          icon: "Tv2",
          name: "Моноблоки",
          desc: "Системный блок и монитор в одном корпусе",
        },
        {
          icon: "Laptop",
          name: "Ноутбуки (Laptop)",
          desc: "Портативные со встроенным дисплеем",
        },
        {
          icon: "Laptop2",
          name: "Нетбуки",
          desc: "Компактные с упрощённой конфигурацией",
        },
        {
          icon: "Tablet",
          name: "Планшетные ПК",
          desc: "Сенсорные без физической клавиатуры",
        },
        {
          icon: "Smartphone",
          name: "Карманные ПК (PDA)",
          desc: "Миниатюрные для базовых задач (устаревший тип)",
        },
      ],
    },
  },
  {
    id: 10,
    type: "classification",
    content: {
      section: "Классификация ПК",
      title: "По назначению",
      items: [
        {
          tag: "🏠",
          name: "Домашние",
          desc: "Развлечения, интернет, офис",
          example: "Обычный настольный ПК",
          color: "#f0f9ff",
          accent: "#0284c7",
        },
        {
          tag: "🎮",
          name: "Игровые",
          desc: "Мощные видеокарты и процессоры",
          example: "Gaming PC",
          color: "#fdf4ff",
          accent: "#9333ea",
        },
        {
          tag: "⚙️",
          name: "Рабочие станции",
          desc: "Графика, моделирование, программирование",
          example: "Mac Pro, Dell Precision",
          color: "#fff7ed",
          accent: "#ea580c",
        },
        {
          tag: "🖥️",
          name: "Серверные",
          desc: "Обслуживание сетей и хранение данных",
          example: "HP ProLiant",
          color: "#f0fdf4",
          accent: "#16a34a",
        },
      ],
    },
  },
  {
    id: 11,
    type: "classification3",
    content: {
      section: "Классификация ПК",
      title: "По уровню мобильности",
      items: [
        {
          icon: "Building2",
          name: "Стационарные",
          desc: "Не предназначены для перемещения",
          example: "Настольные ПК, моноблоки",
          tag: "Fixed",
        },
        {
          icon: "Move",
          name: "Мобильные",
          desc: "Предназначены для работы в движении",
          example: "Ноутбуки, планшеты, КПК",
          tag: "Mobile",
        },
        {
          icon: "Wrench",
          name: "Встраиваемые",
          desc: "Интегрированы в другие устройства",
          example: "Автомобили, бытовая техника",
          tag: "Embedded",
        },
      ],
    },
  },
  {
    id: 12,
    type: "connection",
    content: {
      section: "Практическое применение",
      title: "Связь ИС и ПК",
      pairs: [
        {
          pc: "Настольные ПК",
          is: "Корпоративные ИС",
          reason: "Подходят для ресурсоёмких задач",
          icon: "Monitor",
        },
        {
          pc: "Ноутбуки",
          is: "CRM-системы",
          reason: "Удобны для мобильных пользователей (менеджеры)",
          icon: "Laptop",
        },
        {
          pc: "Планшеты",
          is: "Оперативные ИС",
          reason: "Используются для сканирования товаров",
          icon: "Tablet",
        },
      ],
      example:
        "Врач использует планшет для доступа к медицинской ИС в палате, а администратор — настольный ПК для анализа данных.",
    },
  },
  {
    id: 13,
    type: "conclusion",
    content: {
      section: "Итоги",
      title: "Заключение",
      results: [
        "Информационные системы классифицируются по масштабу, сфере применения, характеру обработки данных и степени автоматизации",
        "Персональные компьютеры делятся на типы по форм-фактору, назначению и мобильности",
        "Выбор ПК зависит от задач, решаемых с помощью ИС",
      ],
      perspective:
        "Развитие облачных технологий и мобильных устройств меняет подходы к классификации ИС и ПК.",
    },
  },
  {
    id: 14,
    type: "quiz",
    content: {
      section: "Самопроверка",
      title: "Вопросы для самопроверки",
      questions: [
        "Назовите три типа ИС по масштабу.",
        "Приведите пример аналитической информационной системы.",
        "Чем отличается нетбук от ноутбука?",
        "Какой тип ПК подходит для работы с графическими редакторами?",
        "Как мобильность компьютера влияет на использование ИС?",
      ],
    },
  },
  {
    id: 15,
    type: "sources",
    content: {
      section: "Источники",
      title: "Список источников",
      items: [
        "Учебники по информатике и информационным системам (ФГОС)",
        "Официальные сайты производителей компьютерной техники",
        "Научные статьи и публикации по теме",
      ],
      author: "Хусаинов Айгиз Айдарович",
    },
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"next" | "prev" | null>(null);
  const [visible, setVisible] = useState(true);
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };

  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= slides.length || idx === current) return;
      const dir = idx > current ? "next" : "prev";
      setAnimDir(dir);
      setVisible(false);
      setTimeout(() => {
        setCurrent(idx);
        setVisible(true);
        setAnimDir(null);
      }, 220);
    },
    [current]
  );

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <div className="presentation-root">
      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="slide-counter">
        <span className="slide-num">{String(current + 1).padStart(2, "0")}</span>
        <span className="slide-total">/ {slides.length}</span>
      </div>

      {/* PDF button */}
      <button className="pdf-btn no-print" onClick={handlePrint} disabled={isPrinting}>
        <Icon name="Download" size={15} />
        <span>{isPrinting ? "Подготовка..." : "Скачать PDF"}</span>
      </button>

      {/* All slides for print */}
      <div className="print-all">
        {slides.map((s) => (
          <div key={s.id} className="print-slide">
            <SlideRenderer slide={s} />
          </div>
        ))}
      </div>

      {/* Slide content */}
      <div
        className="slide-wrapper"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : animDir === "next"
            ? "translateX(24px)"
            : "translateX(-24px)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}
      >
        <SlideRenderer slide={slide} />
      </div>

      {/* Navigation */}
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={prev}
          disabled={current === 0}
          aria-label="Предыдущий слайд"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>

        <div className="dot-nav">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={next}
          disabled={current === slides.length - 1}
          aria-label="Следующий слайд"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}

type SlideContent = Record<string, unknown>;

function SlideRenderer({ slide }: { slide: (typeof slides)[0] }) {
  const { type, content } = slide as { type: string; content: SlideContent };

  if (type === "title") {
    return (
      <div className="slide slide-title">
        <div className="title-accent-line" />
        <div className="title-body">
          <p className="title-label">{content.label}</p>
          <h1 className="title-h1">{content.title}</h1>
          <h2 className="title-h2">{content.subtitle}</h2>
          <div className="title-divider" />
          <div className="title-meta">
            <span className="title-author">{content.author}</span>
            <span className="title-year">{content.meta}</span>
          </div>
        </div>
        <div className="title-deco">
          <div className="deco-circle deco-c1" />
          <div className="deco-circle deco-c2" />
          <div className="deco-circle deco-c3" />
        </div>
      </div>
    );
  }

  if (type === "intro") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="intro-body">
          <div className="intro-goal">
            <span className="intro-goal-label">Цель</span>
            <p className="intro-goal-text">{content.goal}</p>
          </div>
          <div className="intro-tasks">
            <p className="intro-tasks-label">Задачи:</p>
            <ul className="intro-list">
              {content.tasks.map((t: string, i: number) => (
                <li key={i} className="intro-item">
                  <span className="intro-bullet">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="intro-relevance">
            <Icon name="Lightbulb" size={16} />
            <span>{content.relevance}</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "definition") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="def-body">
          <blockquote className="def-quote">{content.definition}</blockquote>
          <div className="def-components">
            {(content.components as {icon: string; label: string}[]).map((c, i: number) => (
              <div key={i} className="def-chip">
                <Icon name={c.icon} size={16} />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
          {content.examples && (
            <div className="def-examples">
              <span className="def-ex-label">Примеры:</span>
              <span>{content.examples}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === "classification") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="cl-grid">
          {(content.items as {tag: string; name: string; desc: string; example: string; color: string; accent: string}[]).map((item, i: number) => (
            <div
              key={i}
              className="cl-card"
              style={{ background: item.color, borderColor: item.accent + "33" }}
            >
              <span
                className="cl-tag"
                style={{ color: item.accent, background: item.accent + "18" }}
              >
                {item.tag}
              </span>
              <p className="cl-name" style={{ color: "#111" }}>
                {item.name}
              </p>
              <p className="cl-desc">{item.desc}</p>
              <p className="cl-example" style={{ color: item.accent }}>
                {item.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "classification3") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="cl3-grid">
          {(content.items as {icon: string; name: string; desc: string; example: string; tag: string}[]).map((item, i: number) => (
            <div key={i} className="cl3-card">
              <div className="cl3-top">
                <div className="cl3-icon">
                  <Icon name={item.icon} size={22} />
                </div>
                <span className="cl3-tag">{item.tag}</span>
              </div>
              <p className="cl3-name">{item.name}</p>
              <p className="cl3-desc">{item.desc}</p>
              <p className="cl3-example">→ {item.example}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "pc-form") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="pcf-grid">
          {(content.items as {icon: string; name: string; desc: string}[]).map((item, i: number) => (
            <div key={i} className="pcf-card">
              <div className="pcf-icon">
                <Icon name={item.icon} size={20} />
              </div>
              <div>
                <p className="pcf-name">{item.name}</p>
                <p className="pcf-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "connection") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="conn-body">
          <div className="conn-grid">
            {(content.pairs as {icon: string; pc: string; is: string; reason: string}[]).map((pair, i: number) => (
              <div key={i} className="conn-row">
                <div className="conn-pc">
                  <Icon name={pair.icon} size={18} />
                  <span>{pair.pc}</span>
                </div>
                <div className="conn-arrow">
                  <Icon name="ArrowRight" size={16} />
                </div>
                <div className="conn-is">{pair.is}</div>
                <div className="conn-reason">{pair.reason}</div>
              </div>
            ))}
          </div>
          <div className="conn-example">
            <Icon name="BookOpen" size={15} />
            <span>{content.example}</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "conclusion") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="concl-body">
          <div className="concl-results">
            {content.results.map((r: string, i: number) => (
              <div key={i} className="concl-item">
                <div className="concl-num">{i + 1}</div>
                <p>{r}</p>
              </div>
            ))}
          </div>
          <div className="concl-prospect">
            <Icon name="TrendingUp" size={16} />
            <span>
              <strong>Перспективы: </strong>
              {content.perspective}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "quiz") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <ol className="quiz-list">
          {content.questions.map((q: string, i: number) => (
            <li key={i} className="quiz-item">
              <span className="quiz-num">0{i + 1}</span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (type === "sources") {
    return (
      <div className="slide slide-content">
        <SlideHeader section={content.section} title={content.title} />
        <div className="src-body">
          <ul className="src-list">
            {content.items.map((item: string, i: number) => (
              <li key={i} className="src-item">
                <span className="src-num">[{i + 1}]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="src-footer">
            <Icon name="User" size={15} />
            <span>Автор: {content.author}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function SlideHeader({
  section,
  title,
}: {
  section: string;
  title: string;
}) {
  return (
    <div className="slide-header">
      <span className="slide-section">{section}</span>
      <h2 className="slide-title">{title}</h2>
      <div className="slide-title-bar" />
    </div>
  );
}