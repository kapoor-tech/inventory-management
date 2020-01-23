--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Assets; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public."Assets" (
    id integer NOT NULL,
    name character varying(255),
    dimensions character varying(255),
    location character varying(255),
    status boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "shoppingCenterId" integer
);


ALTER TABLE public."Assets" OWNER TO developer;

--
-- Name: Assets_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public."Assets_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Assets_id_seq" OWNER TO developer;

--
-- Name: Assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public."Assets_id_seq" OWNED BY public."Assets".id;


--
-- Name: Revisions; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public."Revisions" (
    id integer NOT NULL,
    model text NOT NULL,
    document jsonb NOT NULL,
    operation character varying(7),
    "documentId" integer NOT NULL,
    revision integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Revisions" OWNER TO developer;

--
-- Name: Revisions_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public."Revisions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Revisions_id_seq" OWNER TO developer;

--
-- Name: Revisions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public."Revisions_id_seq" OWNED BY public."Revisions".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO developer;

--
-- Name: Shopping_Centers; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public."Shopping_Centers" (
    id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Shopping_Centers" OWNER TO developer;

--
-- Name: Shopping_Centers_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public."Shopping_Centers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Shopping_Centers_id_seq" OWNER TO developer;

--
-- Name: Shopping_Centers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public."Shopping_Centers_id_seq" OWNED BY public."Shopping_Centers".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    phone character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO developer;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO developer;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Assets id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Assets" ALTER COLUMN id SET DEFAULT nextval('public."Assets_id_seq"'::regclass);


--
-- Name: Revisions id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Revisions" ALTER COLUMN id SET DEFAULT nextval('public."Revisions_id_seq"'::regclass);


--
-- Name: Shopping_Centers id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Shopping_Centers" ALTER COLUMN id SET DEFAULT nextval('public."Shopping_Centers_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Assets; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public."Assets" (id, name, dimensions, location, status, "createdAt", "updatedAt", "shoppingCenterId") FROM stdin;
2	Banner-1	10x12	1st floor	t	2020-01-21 04:55:42.137+05:30	2020-01-22 17:51:14.356+05:30	1
3	Banner-2	13x12	2nd floor	f	2020-01-21 05:01:40.353+05:30	2020-01-22 17:51:57.391+05:30	2
4	Banner-3	13x12	2nd floor	f	2020-01-23 23:34:59.864+05:30	2020-01-23 23:34:59.864+05:30	1
5	Banner-4	13x12	2nd floor	f	2020-01-23 23:35:04.255+05:30	2020-01-23 23:35:04.255+05:30	1
6	Banner-5	13x12	2nd floor	f	2020-01-23 23:35:14.712+05:30	2020-01-23 23:35:14.712+05:30	2
7	Banner-6	13x12	2nd floor	f	2020-01-23 23:35:18.76+05:30	2020-01-23 23:35:18.76+05:30	2
8	New-Banner-6	13x12	2nd floor	f	2020-01-23 23:35:23.955+05:30	2020-01-23 23:35:23.955+05:30	2
9	New-BBanner-6	13x12	2nd floor	f	2020-01-23 23:35:33.725+05:30	2020-01-23 23:35:33.725+05:30	1
10	N-BBanner-6	13x12	2nd floor	f	2020-01-23 23:35:37.6+05:30	2020-01-23 23:35:37.6+05:30	1
\.


--
-- Data for Name: Revisions; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public."Revisions" (id, model, document, operation, "documentId", revision, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public."SequelizeMeta" (name) FROM stdin;
20200120200342-create-shopping-centers.js
20200120200426-create-users.js
20200120200548-create-assets.js
\.


--
-- Data for Name: Shopping_Centers; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public."Shopping_Centers" (id, name, address, "createdAt", "updatedAt") FROM stdin;
1	Pacific Mall	West Delhi, Delhi	2020-01-21 02:10:48.46+05:30	2020-01-21 02:10:48.46+05:30
2	Subhash Nagar Mall	West Delhi, Delhi	2020-01-21 02:37:51.17+05:30	2020-01-21 02:37:51.17+05:30
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public."Users" (id, first_name, last_name, phone, email, password, "createdAt", "updatedAt") FROM stdin;
1	Ashish	Kapoor	9899771880	ashish.kapoor@gmail.com	$2b$10$Fb6OvePsdBd45WlbCvMtue0BcbUG8opxS8Usi/4GvE2FdQdusxIYK	2020-01-19 16:04:46.878+05:30	2020-01-19 16:04:46.878+05:30
2	Pulkit	Kapoor	9899771990	pulkit.kapoor@gmail.com	$2b$10$YhY.isv1RYofpOfgrWIhbes7MNUnxBuBcyJAY/kZrPiFWHTX/s2rO	2020-01-21 01:55:35.778+05:30	2020-01-21 01:55:35.778+05:30
\.


--
-- Name: Assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public."Assets_id_seq"', 10, true);


--
-- Name: Revisions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public."Revisions_id_seq"', 1, false);


--
-- Name: Shopping_Centers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public."Shopping_Centers_id_seq"', 3, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public."Users_id_seq"', 2, true);


--
-- Name: Assets Assets_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Assets"
    ADD CONSTRAINT "Assets_pkey" PRIMARY KEY (id);


--
-- Name: Revisions Revisions_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Revisions"
    ADD CONSTRAINT "Revisions_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Shopping_Centers Shopping_Centers_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Shopping_Centers"
    ADD CONSTRAINT "Shopping_Centers_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Assets shoppingCenterId; Type: FK CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."Assets"
    ADD CONSTRAINT "shoppingCenterId" FOREIGN KEY ("shoppingCenterId") REFERENCES public."Shopping_Centers"(id);


--
-- PostgreSQL database dump complete
--

