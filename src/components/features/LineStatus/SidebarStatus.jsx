import { useState, useEffect } from "react";
import axios from "axios";

// Lightweight status summary for the sidebar — shows only title + issue count.
// Does not render the full expandable list so it avoids the 800px-wide container.
function SidebarStatus({ title, api_url, icon: Icon }) {
    const [issueCount, setIssueCount] = useState(null); // null = loading

    useEffect(() => {
        axios.get(api_url)
            .then(res => {
                const issues = res.data.filter(item =>
                    item.lineStatuses?.[0]?.statusSeverityDescription !== 'Good Service'
                ).length;
                setIssueCount(issues);
            })
            .catch(() => setIssueCount(0));
    }, [api_url]);

    return (
        <div className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0">
            <span className="flex items-center gap-2 text-white/80 font-rail text-sm">
                {Icon && <Icon className="text-white/50 text-base shrink-0" />}
                {title}
            </span>
            {issueCount === null ? (
                <span className="text-white/30 text-xs">…</span>
            ) : issueCount > 0 ? (
                <span className="text-xs bg-red-aspect text-white rounded-rail px-2 py-0.5">
                    {issueCount} issue{issueCount !== 1 ? 's' : ''}
                </span>
            ) : (
                <span className="text-xs text-green-400">Good service</span>
            )}
        </div>
    );
}

export default SidebarStatus;
