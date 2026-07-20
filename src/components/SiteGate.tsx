import { useState, type FormEvent, type ReactNode } from "react";
import { Lock } from "lucide-react";
import { useLang } from "../lib/i18n";

/**
 * Whole-app password gate. Casual privacy for a family trip — NOT real
 * security: this is a static site, so all content still ships to the
 * browser and (if the repo is public) lives in the source. What this
 * does buy: casual visitors and search engines don't get in, and the
 * password itself is never in the bundle — only its SHA-256 hash is,
 * and we compare hashes client-side. Unlock is remembered per device.
 *
 * To change the password: run
 *   node -e "console.log(require('crypto').createHash('sha256').update('NEWPASS').digest('hex'))"
 * and paste the result into PASSWORD_HASH.
 */
const PASSWORD_HASH =
  "7b86f7f635184941444221bf27b3f09c86591a2d6731a9a292c4182896032200"; // sha256("110826")
const UNLOCK_KEY = "austria26-site-unlock-v1";

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input)
  );
  return [...new Uint8Array(buf)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function SiteGate({ children }: { children: ReactNode }) {
  const { lang, dir } = useLang();
  const t = (en: string, he: string) => (lang === "he" ? he : en);

  const [unlocked, setUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(UNLOCK_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setChecking(true);
    const hex = await sha256Hex(value.trim());
    if (hex === PASSWORD_HASH) {
      try {
        localStorage.setItem(UNLOCK_KEY, "1");
      } catch {
        /* private mode — still unlock for this session */
      }
      setUnlocked(true);
    } else {
      setError(true);
      setChecking(false);
    }
  };

  return (
    <div
      dir={dir}
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-gradient-to-b from-olive-700 via-olive-600 to-ink-800 px-6 text-cream-50"
      style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="w-full max-w-sm text-center">
        <div className="font-serif text-4xl leading-none">
          Austria <span className="italic text-terracotta-400">'26</span>
        </div>
        <p className="mt-2 mb-8 text-cream-50/80 text-sm">
          {t("The Zolotushko family · Tyrol", "משפחת זולוטושקו · טירול")}
        </p>

        <form
          onSubmit={submit}
          className="bg-cream-50 text-ink-900 rounded-3xl p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45)]"
        >
          <span className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-600">
            <Lock size={22} />
          </span>
          <h1 className="font-serif text-2xl leading-tight">
            {t("A private family trip", "טיול משפחתי פרטי")}
          </h1>
          <p className="mt-1 mb-5 text-sm text-ink-700/80">
            {t(
              "Enter the family password to open the trip app.",
              "הזינו את סיסמת המשפחה כדי לפתוח את אפליקציית הטיול."
            )}
          </p>
          <input
            type="password"
            inputMode="numeric"
            autoFocus
            autoComplete="current-password"
            value={value}
            onChange={e => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder={t("Password", "סיסמה")}
            aria-label={t("Family password", "סיסמת המשפחה")}
            className="w-full rounded-full border border-cream-300 bg-cream-100 px-4 py-3 text-center text-lg tracking-[0.3em] focus:outline-none focus:ring-2 focus:ring-terracotta-500/40"
          />
          {error && (
            <p className="mt-2 text-sm text-terracotta-600">
              {t("That's not it — try again.", "לא נכון — נסו שוב.")}
            </p>
          )}
          <button
            type="submit"
            disabled={checking || !value.trim()}
            className="mt-4 w-full rounded-full bg-terracotta-500 py-3 font-medium text-cream-50 transition-colors hover:bg-terracotta-600 disabled:opacity-60"
          >
            {t("Unlock", "כניסה")}
          </button>
          <p className="mt-4 text-xs text-ink-700/60">
            {t(
              "Shared with the family · ask whoever planned the trip.",
              "משותף עם המשפחה · שאלו את מי שתכנן את הטיול."
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
