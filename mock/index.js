export default {
  catalog: {
    mainTitle: `SpaceX Ships`,
    filter: {
      fields: [
        {
          title: `a`,
          list: [
            `QA`,
            `DevOps`,
            `Management`,
            `UX/UI and design`,
            `HR and Finance`,
            `Architect and Analyst`,
            `Product and Project management`,
            `Telco`,
            `Network`,
            `Security`,
            `DBA`,
            `Sys Admin`,
            `AI`,
            `BigData`,
            `Other`,
          ],
          multi: false,
        },
        {
          title: `b`,
          list: [
            `Java`,
            `C++`,
            `Erlang`,
            `JavaScript`,
            `Node.JS`,
            `Scala`,
            `Python`,
            `RocksDB`,
            `MongoDB`,
            `Cassandra`,
            `Oracle`,
            `Vertica`,
            `Neo4J`,
            `Hadoop`,
            `VMWare`,
            `Kubernetes`,
            `DDC`,
            `Marathon`,
            `Terraform`,
            `CloudFoundry`,
            `Amazon`,
            `AWS`,
            `Google GCP`,
            `Zabbix`,
            `Influx`,
            `Elasticsearch`,
            `Git`,
            `Mercurial`,
            `Jenkins`,
            `GitLab`,
            `GridGain`,
            `Coherence`,
            `Rabbit`,
            `Kafka`,
            `ZeroMQ,`,
          ],
          multi: true,
        },
        {
          title: `c`,
          list: [
            `Contact Center`,
            `Platform A`,
            `Platform D`,
            `Analytics`,
            `Telco`,
            `Billing`,
            `RCV (Video-conference)`,
            `Core`,
            `SWAT`,
            `Relies IT`,
            `Features`,
            `AI`,
            `CRM SPB`,
            `Glip`,
            `Deployment`,
            `SysOps`,
            `Lab`,
          ],
          multi: true,
        },
      ],
      internship: `D`,
      english: `E`,
      discard: `Discard`,
    },
    search: `Enter ship`,
  },
  vacancy: {
    qualifications: {
      title: `Desired Qualifications`,
      text: `You will become a part of Big Data team at large
      US-based international company, leader in enterprise VoIP
        communication solutions, messaging and video conferencing.
        The team is primarily focusing on developing software for
          processing large amounts of data and performing various
          maintenance and data mining tasks using Hadoop ecosystem.

      Technology stack includes Spark, Hadoop (HDFS, YARN), Apache
      Flume, HP Vertica, MongoDB, different data formats (Avro, Parquet, etc).`,
    },
    conditions: {
      title: `Conditions`,
      list: [
        {
          icon: 26,
          text: `28 day vacation 100% paid in accordance with the current salary`,
        },
        {
          icon: 26,
          text: `Business trips to foreign branch offices (the USA, China) and further work H1-B`,
        },
        {
          icon: 26,
          text: `Corporate training programs, English language `,
        },
        {
          icon: 26,
          text: `Job placement and payment of salary take place according to the labor codey`,
        },
        {
          icon: 26,
          text: `Nonresident applicants are granted Relocation Bonus`,
        },
        {
          icon: 26,
          text: `28 day vacation 100% paid in accordance with the current salary`,
        },
        {
          icon: 26,
          text: `Sick leaves 100% paid.`,
        },
      ],
    },
    steps: {
      title: `Этапы отбора`,
      list: [
        {
          title: `Знакомство с рекрутером и вакансией`,
          text: `Расскажем о вакансии, зададим несколько вопросов об опыте и договоримся о дате собеседования.`,
          subtitle: ``,
        },
        {
          title: `Интервью с рекрутером и техническим специалистом `,
          text: `Познакомимся, зададим вопросы об опыте работы и технических знаниях, расскажем о проекте.`,
          subtitle: `1,5-2 часа`,
        },
        {
          title: `Финальная встреча с руководителем департамента`,
          text: `Познакомим с будущим руководителем, подробнее расскажем о проекте,
          поговорим о предстоящих задачах и ожиданиях, зададим уточняющие вопросы.`,
          subtitle: `30 мин-1 час`,
        },
      ],
    },
    application: {
      title: `Откликнуться на вакансию`,
      button: `Отправить резюме`,
    },
    recruiters: {
      title: `Остались вопросы?`,
      text: `Пиши на почту jobs@dins.ru или нашим рекрутерам`,
    },
    vacancies: {
      title: `Вакансии в ЭТОЙ категории`,
      catalog: [
        {
          name: `Java developer (Big Data team)`,
          descr: `Стек: Java, Redis, Kafka, MongoDB, Docker, ELK, TICK. Сервис базируется в AWS и Private Cloud.`,
        },
        {
          name: `Java developer (Big Data team)`,
          descr: `We are looking for a talented and energetic team leader to head our Integration Team.`,
        },
      ],
    },
    sidebarSlider: [
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
    ],
    sidebarArticle: {
      title: `Релокация`,
      subtitle: `Если вы проживаете в другом городе или стране,
      но хотите работать у нас, то мы предложим поможем с переездом.`,
    },
    map: {
      title: `Офисы на карте`,
      coords: ``,
    },
  }
};
