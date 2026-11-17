-- Real all-time view counter (grey eye in the top right of the site)
create table if not exists public.site_views (
  id int primary key check (id = 1),
  total bigint not null default 0
);
insert into public.site_views (id, total) values (1, 0) on conflict (id) do nothing;
alter table public.site_views enable row level security;
revoke all on public.site_views from public, anon, authenticated;

create or replace function public.ss_view() returns bigint
language plpgsql security definer set search_path = public, pg_temp as $$
declare t bigint;
begin
  update public.site_views set total = total + 1 where id = 1 returning total into t;
  return t;
end $$;

create or replace function public.ss_views() returns bigint
language sql stable security definer set search_path = public, pg_temp as $$
  select total from public.site_views where id = 1
$$;

revoke all on function public.ss_view() from public, anon, authenticated;
revoke all on function public.ss_views() from public, anon, authenticated;
grant execute on function public.ss_view() to anon, authenticated;
grant execute on function public.ss_views() to anon, authenticated;
