import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        title: "Usof Ahmed",
        subtitle: "Expert SEO Specialist",
        bio: "As a data-driven SEO Specialist with 1+ year of experience, I transform websites from digital assets into powerful, self-sustaining revenue engines. My expertise lies in moving beyond basic content creation to implement strategic technical SEO, build high-authority backlink profiles, and craft user-intent-focused content strategies that deliver measurable, profitable results.",
        cta: {
          email: "Email",
          call: "Call",
          whatsapp: "WhatsApp",
          linkedin: "LinkedIn"
        }
      },
      results: {
        title: "Proven Results",
        metrics: {
          newVisitors: "New visitors",
          returningUsers: "Returning users",
          clicks: "Clicks",
          impressions: "Impressions",
          searchImpressions: "Search Impressions",
          targetedClicks: "Targeted Clicks",
          avgPosition: "Avg Position",
          organicVisitIncrease: "Organic Visit Increase",
          totalSales: "Total Sales (SAR)",
          salesGrowth: "Sales Growth",
          organicSessions: "Organic Sessions",
          conversionRate: "Conversion Rate",
          keywordsRanked: "Keywords Ranked",
          referringDomains: "Referring Domains",
          revenueFromOrganic: "Revenue from Organic",
          revenue: "Revenue",
          returningCustomer: "Returning customer"
        }
      },
      projects: {
        title: "Portfolio Projects",
        subtitle: "A curated selection of high-performance SEO projects, organized by industry and brand.",
        performance: "Performance"
      },
      contact: {
        title: "Let's Work Together",
        subtitle: "Ready to transform your website into a revenue engine? Reach out today.",
        copy: "Usof Ahmed. All rights reserved."
      },
      caseStudies: [
        {
          title: 'Electrical Appliances Website SEO Recovery',
          overview: 'Severe SEO disruption caused by a malicious freelancer. Major technical issues affecting product visibility.',
          challenges: ['Domain removed from GSC', 'Corrupted sitemaps', '300+ unindexed products', 'Traffic drop'],
          strategies: ['Reinstatement in GSC', 'URL architecture audit', 'New XML sitemap', 'Manual re-archiving'],
          results: [
            { label: 'New visitors', value: '+372%' },
            { label: 'Returning users', value: '197%' },
            { label: 'Clicks', value: '519 to 1300' },
            { label: 'Impressions', value: '14.7k to 65k' }
          ]
        },
        {
          title: 'Building Authority for a New Store in a Saturated Market',
          overview: 'SEO strategy for a new construction industry website with an identical brand name to 4 competitors.',
          challenges: ['Brand name saturation', 'Extreme market competition', 'Zero initial authority'],
          strategies: ['User-Intent Content', 'Internal Linking Architecture', 'High-Authority Backlinks', 'Content Credibility'],
          results: [
            { label: 'Search Impressions', value: '38,000' },
            { label: 'Targeted Clicks', value: '688' },
            { label: 'Avg Position', value: '16.6' },
            { label: 'Organic Visit Increase', value: '+48.7%' }
          ]
        },
        {
          title: 'Revitalizing an Herbal Store via User-Intent SEO',
          overview: 'Addressing SEO obstacles and aligning content with user intent for an established herbal store.',
          challenges: ['Technical SEO issues', 'Low search volume keywords', 'Weak product descriptions'],
          strategies: ['Intent-focused content plan', 'Improved product pages', 'Website reorganization', 'Manual indexing'],
          results: [
            { label: 'Total Sales (SAR)', value: '167k+' },
            { label: 'Sales Growth', value: '+89.5%' },
            { label: 'Organic Sessions', value: '+71.6%' },
            { label: 'Conversion Rate', value: '+19.8%' }
          ]
        },
        {
          title: 'Building an SEO Foundation for a Niche Sweets Store',
          overview: 'Improving visibility and organic performance for a dried sweets e-commerce site.',
          challenges: ['Unoptimized content', 'Unclear site structure', 'Weak backlink profile'],
          strategies: ['Keyword research', 'Homepage optimization', 'Category restructuring', 'Internal linking'],
          results: [
            { label: 'Keywords Ranked', value: '658 → 1,500' },
            { label: 'Referring Domains', value: '+166%' },
            { label: 'Organic Sessions', value: '+31.8%' },
            { label: 'Revenue from Organic', value: '+48.83%' }
          ]
        },
        {
          title: 'SEO Recovery for Motorcycle Accessories E-commerce',
          overview: 'Domain migration failure leading to zero organic presence for a new motorcycle store.',
          challenges: ['No GSC connection', 'No sitemap/indexing', 'Invisible product pages'],
          strategies: ['GSC Validation', 'Manual re-indexing', 'Product page optimization', 'Internal linking'],
          results: [
            { label: 'Clicks', value: '+1700' },
            { label: 'Impressions', value: '+112k' },
            { label: 'Returning customer', value: '52%' },
            { label: 'Revenue', value: '+237k' }
          ]
        }
      ]
    }
  },
  ar: {
    translation: {
      hero: {
        title: "يوسف أحمد",
        subtitle: "خبير تحسين محركات البحث (SEO)",
        bio: "بصفتي خبيراً في تحسين محركات البحث (SEO) يعتمد على البيانات مع خبرة تزيد عن عام، أقوم بتحويل المواقع الإلكترونية من مجرد أصول رقمية إلى محركات قوية ومستدامة لتحقيق الإيرادات. تكمن خبرتي في تجاوز إنشاء المحتوى الأساسي لتنفيذ الـ SEO التقني الاستراتيجي، وبناء ملفات باك لينك قوية، وصياغة استراتيجيات محتوى تركز على نية المستخدم لتقديم نتائج ملموسة ومربحة.",
        cta: {
          email: "البريد",
          call: "اتصال",
          whatsapp: "واتساب",
          linkedin: "لينكد إن"
        }
      },
      results: {
        title: "نتائج مثبتة",
        metrics: {
          newVisitors: "زوار جدد",
          returningUsers: "مستخدمون عائدون",
          clicks: "نقرات",
          impressions: "مرات الظهور",
          searchImpressions: "مرات الظهور في البحث",
          targetedClicks: "النقرات المستهدفة",
          avgPosition: "متوسط الموضع",
          organicVisitIncrease: "زيادة الزيارات المجانية",
          totalSales: "إجمالي المبيعات (ر.س)",
          salesGrowth: "نمو المبيعات",
          organicSessions: "الجلسات المجانية",
          conversionRate: "معدل التحويل",
          keywordsRanked: "الكلمات المفتاحية المصنفة",
          referringDomains: "النطاقات المحيلة",
          revenueFromOrganic: "الأرباح من البحث المجاني",
          revenue: "أرباح",
          returningCustomer: "عملاء عائدون"
        }
      },
      projects: {
        title: "معرض الأعمال",
        subtitle: "مجموعة مختارة من مشاريع SEO عالية الأداء، منظمة حسب المجال والعلامة التجارية.",
        performance: "أداء"
      },
      contact: {
        title: "لنعمل معاً",
        subtitle: "هل أنت مستعد لتحويل موقعك إلى محرك للأرباح؟ تواصل معي اليوم.",
        copy: "يوسف أحمد. جميع الحقوق محفوظة."
      },
      caseStudies: [
        {
          title: 'تعافي SEO لموقع أجهزة كهربائية',
          overview: 'تعطل حاد في السيو بسبب مستقل غير محترف. مشاكل تقنية كبيرة أثرت على ظهور المنتجات.',
          challenges: ['إزالة النطاق من GSC', 'خرائط مواقع تالفة', 'أكثر من 300 منتج غير مفهرس', 'انخفاض الزيارات'],
          strategies: ['إعادة الإدراج في GSC', 'تدقيق بنية الروابط', 'خريطة موقع XML جديدة', 'إعادة الفهرسة اليدوية'],
          results: [
            { label: 'زوار جدد', value: '+372%' },
            { label: 'مستخدمون عائدون', value: '197%' },
            { label: 'نقرات', value: '519 إلى 1300' },
            { label: 'مرات الظهور', value: '14.7 ألف إلى 65 ألف' }
          ]
        },
        {
          title: 'بناء سلطة لمتجر جديد في سوق مشبع',
          overview: 'استراتيجية SEO لموقع جديد في مجال المقاولات يحمل اسماً تجارياً مطابقاً لـ 4 منافسين.',
          challenges: ['تشبع الاسم التجاري', 'منافسة سوقية شديدة', 'سلطة ابتدائية منعدمة'],
          strategies: ['محتوى يركز على نية المستخدم', 'بنية الروابط الداخلية', 'باك لينك عالي السلطة', 'مصداقية المحتوى'],
          results: [
            { label: 'مرات الظهور في البحث', value: '38,000' },
            { label: 'النقرات المستهدفة', value: '688' },
            { label: 'متوسط الموضع', value: '16.6' },
            { label: 'زيادة الزيارات المجانية', value: '+48.7%' }
          ]
        },
        {
          title: 'تنشيط متجر أعشاب عبر SEO يركز على نية المستخدم',
          overview: 'معالجة عقبات الـ SEO ومواءمة المحتوى مع نية المستخدم لمتجر أعشاب قائم.',
          challenges: ['مشاكل SEO تقنية', 'كلمات مفتاحية ذات حجم بحث منخفض', 'وصف منتجات ضعيف'],
          strategies: ['خطة محتوى تركز على النية', 'تحسين صفحات المنتجات', 'إعادة تنظيم الموقع', 'الفهرسة اليدوية'],
          results: [
            { label: 'إجمالي المبيعات (ر.س)', value: '167 ألف+' },
            { label: 'نمو المبيعات', value: '+89.5%' },
            { label: 'الجلسات المجانية', value: '+71.6%' },
            { label: 'معدل التحويل', value: '+19.8%' }
          ]
        },
        {
          title: 'بناء أساس SEO لمتجر حلويات متخصص',
          overview: 'تحسين الظهور والأداء المجاني لموقع تجارة إلكترونية للحلويات المجففة.',
          challenges: ['محتوى غير محسن', 'بنية موقع غير واضحة', 'ملف باك لينك ضعيف'],
          strategies: ['بحث الكلمات المفتاحية', 'تحسين الصفحة الرئيسية', 'إعادة هيكلة الأقسام', 'الربط الداخلي'],
          results: [
            { label: 'الكلمات المفتاحية المصنفة', value: '658 ← 1,500' },
            { label: 'النطاقات المحيلة', value: '+166%' },
            { label: 'الجلسات المجانية', value: '+31.8%' },
            { label: 'الأرباح من البحث المجاني', value: '+48.83%' }
          ]
        },
        {
          title: 'تعافي SEO لمتجر إكسسوارات دراجات نارية',
          overview: 'فشل في هجرة النطاق مما أدى إلى غياب تام للظهور المجاني لمتجر دراجات نارية جديد.',
          challenges: ['عدم الاتصال بـ GSC', 'غياب خريطة الموقع/الفهرسة', 'صفحات منتجات غير مرئية'],
          strategies: ['تحقق GSC', 'إعادة الفهرسة اليدوية', 'تحسين صفحات المنتجات', 'الربط الداخلي'],
          results: [
            { label: 'نقرات', value: '+1700' },
            { label: 'مرات الظهور', value: '+112 ألف' },
            { label: 'عملاء عائدون', value: '52%' },
            { label: 'أرباح', value: '+237 ألف' }
          ]
        }
      ]
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
