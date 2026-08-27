/**
 * Advanced Accordion Block - Modern Dashboard JavaScript
 * Version: 1.0.0
 */

window.aagb_local_object = window.aagb_local_object || {
    ajax_url: (typeof aabDashboard !== 'undefined') ? aabDashboard.ajaxurl : '',
    nonce: (typeof aabDashboard !== 'undefined') ? aabDashboard.nonce : '',
    licensing: (typeof aabDashboard !== 'undefined') ? aabDashboard.isPro : false,
    assets: (typeof aabDashboard !== 'undefined') ? aabDashboard.pluginUrl + '/assets/' : ''
};

(function($) {
    'use strict';

    'use strict';

    // Dashboard App
    const AABDashboard = {
        /**
         * Initialize the dashboard
         */
        init: function() {
            this.bindEvents();
            this.initTabs();
            this.initAnimations();
            this.initVideoModal();
            this.initRatingPrompt();
            this.initExtensionHandlers();
            this.initTooltips();
            this.initBulkConverter();
        },

        /**
         * Initialize tab functionality (Custom implementation for split nav/panel structure)
         */
        initTabs: function() {
            const self = this;
            const $tabNav = $('#aab-main-tabs');
            const $tabLinks = $tabNav.find('.aab-tabs-list a');
            const $tabPanels = $('.aab-tabs-content .aab-tab-panel');

            if (!$tabNav.length || !$tabLinks.length) {
                return;
            }

            // Initialize: Show first tab, hide others
            $tabPanels.hide().first().show().addClass('active');
            $tabLinks.first().parent().addClass('ui-tabs-active ui-state-active active');

            // Auto switch tab if URL has a matching hash
            const hash = window.location.hash;

            if (hash && $(hash).length && $tabNav.find('a[href="' + hash + '"]').length) {
                self.switchTab(hash);
            }

            // Tab click handler
            $tabLinks.on('click', function(e) {
                e.preventDefault();
                const targetId = $(this).attr('href');

                // Update tab nav states
                $tabLinks.parent().removeClass('ui-tabs-active ui-state-active active');
                $(this).parent().addClass('ui-tabs-active ui-state-active active');

                // Animate panel transition
                $tabPanels.filter('.active').fadeOut(100, function() {
                    $(this).removeClass('active');
                    $(targetId).fadeIn(200).addClass('active fade-in');

                    // Re-trigger animations for elements inside the panel
                    $(targetId).find('.aab-animate-fade-in, .aab-animate-slide-in').each(function(index) {
                        $(this).css('animation', 'none');
                        $(this)[0].offsetHeight; // Trigger reflow
                        $(this).css('animation', '');
                    });
                });
            });

            // Keyboard navigation for tabs
            $tabLinks.on('keydown', function(e) {
                const currentIndex = $tabLinks.index(this);
                let newIndex;

                switch(e.key) {
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        newIndex = currentIndex === 0 ? $tabLinks.length - 1 : currentIndex - 1;
                        $tabLinks.eq(newIndex).focus().click();
                        break;
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        newIndex = currentIndex === $tabLinks.length - 1 ? 0 : currentIndex + 1;
                        $tabLinks.eq(newIndex).focus().click();
                        break;
                    case 'Home':
                        e.preventDefault();
                        $tabLinks.first().focus().click();
                        break;
                    case 'End':
                        e.preventDefault();
                        $tabLinks.last().focus().click();
                        break;
                }
            });
        },

        /**
         * Switch to a specific tab programmatically
         */
        switchTab: function(tabId) {
            const $tabLinks = $('#aab-main-tabs .aab-tabs-list a');
            const $tabPanels = $('.aab-tabs-content .aab-tab-panel');
            const $targetLink = $tabLinks.filter('[href="' + tabId + '"]');

            if ($targetLink.length) {
                // Update tab nav states
                $tabLinks.parent().removeClass('ui-tabs-active ui-state-active active');
                $targetLink.parent().addClass('ui-tabs-active ui-state-active active');

                // Update tab panels
                $tabPanels.removeClass('active fade-in').hide();
                $(tabId).addClass('active fade-in').show();
            }
        },

        /**
         * Bind all event handlers
         */
        bindEvents: function() {
            // Card hover effects
            $('.aab-setting-item, .aab-module-item, .aab-feature-card').on('mouseenter', function() {
                $(this).addClass('aab-hover');
            }).on('mouseleave', function() {
                $(this).removeClass('aab-hover');
            });

            // Keyboard accessibility for cards
            $('.aab-setting-item, .aab-module-item').on('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const link = $(this).find('a').first();
                    if (link.length) {
                        window.location.href = link.attr('href');
                    }
                }
            });
        },

        /**
         * Initialize scroll-based animations
         */
        initAnimations: function() {
            // Intersection Observer for fade-in animations
            if ('IntersectionObserver' in window) {
                const animatedElements = document.querySelectorAll('.aab-animate-on-scroll');

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('aab-animate-fade-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                animatedElements.forEach(el => observer.observe(el));
            }

            // Staggered animation for grid items
            $('.aab-settings-grid .aab-setting-item, .aab-modules-grid .aab-module-item, .aab-features-grid .aab-feature-card').each(function(index) {
                $(this).css('animation-delay', (index * 0.05) + 's');
            });
        },

        /**
         * Initialize video modal functionality
         */
        initVideoModal: function() {
            const self = this;

            // Open video modal
            $('.aab-hero-video-overlay, .aab-play-btn ,.aab-open-video').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.openVideoModal();
            });

            // Close video modal
            $('.aab-video-modal-close, .aab-video-modal').on('click', function(e) {
                if (e.target === this) {
                    self.closeVideoModal();
                }
            });

            // Close on escape key
            $(document).on('keydown', function(e) {
                if (e.key === 'Escape') {
                    self.closeVideoModal();
                }
            });
        },

        /**
         * Open the video modal
         */
        openVideoModal: function() {
            const modal = $('#aab-video-modal');
            const iframe = modal.find('iframe');
            const videoSrc = iframe.data('src');

            if (videoSrc) {
                iframe.attr('src', videoSrc + '?autoplay=1');
            }

            modal.addClass('active');
            $('body').css('overflow', 'hidden');

            // Focus trap
            modal.find('.aab-video-modal-close').focus();
        },

        /**
         * Close the video modal
         */
        closeVideoModal: function() {
            const modal = $('#aab-video-modal');
            const iframe = modal.find('iframe');

            iframe.attr('src', '');
            modal.removeClass('active');
            $('body').css('overflow', '');
        },

        /**
         * Initialize rating prompt with delayed visibility
         */
        initRatingPrompt: function() {
            const ratingCard = $('.aab-rating-card');

            if (!ratingCard.length) return;

            // Check if user has dismissed the rating prompt
            const dismissed = localStorage.getItem('aab_rating_dismissed');
            const installDate = localStorage.getItem('aab_install_date');
            const today = new Date().getTime();

            // Set install date if not set
            if (!installDate) {
                localStorage.setItem('aab_install_date', today);
            }

            // Show rating prompt after 7 days of usage
            const sevenDays = 7 * 24 * 60 * 60 * 1000;
            const shouldShow = !dismissed && installDate && (today - parseInt(installDate)) > sevenDays;

            if (!shouldShow && installDate) {
                // Still show but with lower prominence
                ratingCard.addClass('aab-rating-subtle');
            }

            // Dismiss rating prompt
            $('.aab-rating-dismiss').on('click', function(e) {
                e.preventDefault();
                localStorage.setItem('aab_rating_dismissed', 'true');
                ratingCard.fadeOut(300);
            });
        },

        /**
         * Initialize extension install/activate handlers
         */
        initExtensionHandlers: function() {
            const self = this;

            // Install plugin
            $(document).on('click', '.aab-ext-btn-install', function(e) {
                e.preventDefault();
                const btn = $(this);
                const slug = btn.data('slug');

                if (!slug) return;

                self.installPlugin(btn, slug);
            });

            // Activate plugin
            $(document).on('click', '.aab-ext-btn-activate', function(e) {
                e.preventDefault();
                const btn = $(this);
                const plugin = btn.data('plugin');

                if (!plugin) return;

                self.activatePlugin(btn, plugin);
            });
        },

        /**
         * Install a plugin via AJAX
         */
        installPlugin: function(btn, slug) {
            const originalText = btn.text();

            btn.text('Installing...').addClass('aab-ext-btn-loading').prop('disabled', true);

            $.ajax({
                url: aabDashboard.ajaxurl,
                type: 'POST',
                data: {
                    action: 'aab_install_plugin',
                    slug: slug,
                    nonce: aabDashboard.nonce
                },
                success: function(response) {
                    if (response.success) {
                        btn.text('Activate')
                           .removeClass('aab-ext-btn-loading aab-ext-btn-install')
                           .addClass('aab-ext-btn-activate')
                           .data('plugin', response.data.plugin_file)
                           .prop('disabled', false);
                    } else {
                        btn.text(originalText).removeClass('aab-ext-btn-loading').prop('disabled', false);
                        alert(response.data.message || 'Installation failed. Please try again.');
                    }
                },
                error: function() {
                    btn.text(originalText).removeClass('aab-ext-btn-loading').prop('disabled', false);
                    alert('Installation failed. Please try again.');
                }
            });
        },

        /**
         * Activate a plugin via AJAX
         */
        activatePlugin: function(btn, plugin) {
            const originalText = btn.text();

            btn.text('Activating...').addClass('aab-ext-btn-loading').prop('disabled', true);

            $.ajax({
                url: aabDashboard.ajaxurl,
                type: 'POST',
                data: {
                    action: 'aab_activate_plugin',
                    plugin: plugin,
                    nonce: aabDashboard.nonce
                },
                success: function(response) {
                    if (response.success) {
                        btn.text('Active')
                           .removeClass('aab-ext-btn-loading aab-ext-btn-activate')
                           .addClass('aab-ext-btn-active')
                           .prop('disabled', true);

                        // Reload to update the page state
                        location.reload();
                    } else {
                        btn.text(originalText).removeClass('aab-ext-btn-loading').prop('disabled', false);
                        alert(response.data.message || 'Activation failed. Please try again.');
                    }
                },
                error: function() {
                    btn.text(originalText).removeClass('aab-ext-btn-loading').prop('disabled', false);
                    alert('Activation failed. Please try again.');
                }
            });
        },

        /**
         * Initialize tooltips
         */
        initTooltips: function() {
            // Simple tooltip implementation
            $('.aab-tooltip').each(function() {
                const tooltip = $(this);
                const text = tooltip.attr('title');

                if (text) {
                    tooltip.attr('data-tooltip', text).removeAttr('title');
                }
            });
        },

        /**
         * Initialize Bulk Accordion Converter Engine
         */
        initBulkConverter: function() {
            if (!$('#aab-start-scan-btn').length) {
                return;
            }

            const state = {
                posts: [],
                filteredPosts: [],
                selectedIds: [],
                isConverting: false,
                isCancelled: false,
                currentIndex: 0,
                convertedCount: 0,
                failedCount: 0,
                totalSelected: 0,
                stats: {}
            };

            function escapeAttr(str) {
                return $('<div>').text(str || '').html().replace(/"/g, '&quot;');
            }

            // DOM Elements
            const $scanBtn = $('#aab-start-scan-btn');
            const $emptyState = $('#aab-converter-empty-state');
            const $resultsContainer = $('#aab-converter-results-container');
            const $actionBar = $('#aab-converter-action-bar');
            const $actionBarDefault = $('#aab-action-bar-default');
            const $actionBarProgress = $('#aab-action-bar-progress');
            const $barProgressLabel = $('#aab-bar-progress-label');
            const $barProgressFill = $('#aab-bar-progress-fill');
            const $barCancelBtn = $('#aab-bar-cancel-btn');
            const $postsTbody = $('#aab-posts-tbody');
            const $selectAllTop = $('#aab-select-all-posts');
            const $thSelectAll = $('#aab-th-select-all');
            const $convertBtn = $('#aab-run-convert-btn');
            const $filterInput = $('#aab-posts-filter-input');
            const $errorModal = $('#aab-error-modal');
            const $errorModalMsg = $('#aab-error-modal-msg');

            // Render Table Rows
            function renderTable(posts) {
                $postsTbody.empty();
                if (!posts || !posts.length) {
                    $postsTbody.append('<tr><td colspan="6" class="aab-no-posts-found">No candidate posts matching the filter.</td></tr>');
                    return;
                }

                posts.forEach(function(post) {
                    const isChecked = state.selectedIds.indexOf(post.id) !== -1;
                    const blockBadges = [];

                    if (post.isConverted) {
                        blockBadges.push('<span class="aab-badge-pill aab-badge-converted" style="background: rgba(16, 185, 129, 0.12); color: #047857; font-weight: 600;">✓ Converted to AAB</span>');
                    } else {
                        if (post.rank_math_count > 0) {
                            blockBadges.push('<span class="aab-badge-pill aab-badge-rm" title="' + (post.rank_math_questions || 0) + ' question(s)">Rank Math FAQ (' + post.rank_math_count + ')</span>');
                        }
                        if (post.core_accordion_count > 0) {
                            blockBadges.push('<span class="aab-badge-pill aab-badge-core">Core Accordion (' + post.core_accordion_count + ')</span>');
                        }
                        if (post.core_details_count > 0) {
                            blockBadges.push('<span class="aab-badge-pill aab-badge-details">Core Details (' + post.core_details_count + ')</span>');
                        }
                    }

                    const safeTitle = $('<div>').text(post.title).html();
                    let statusHtml = '<span class="aab-status-badge aab-status-pending">Ready</span>';
                    let actionHtml = '<button type="button" class="aab-btn aab-btn-sm aab-btn-convert-single" data-id="' + post.id + '">Convert</button>';

                    if (post.isConverted) {
                        statusHtml = '<span class="aab-status-badge aab-status-converted">✓ Converted</span>';
                        actionHtml = '<a href="' + post.view_url + '" target="_blank" class="aab-btn aab-btn-sm aab-btn-success">View Page ↗</a>';
                    } else if (post.hasError) {
                        statusHtml = '<span class="aab-status-badge aab-status-error">✕ Error <button type="button" class="aab-error-info-btn" data-error="' + escapeAttr(post.errorMessage) + '" title="View error details"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></button></span>';
                        actionHtml = '<button type="button" class="aab-btn aab-btn-sm aab-btn-convert-single" data-id="' + post.id + '">Retry</button>';
                    }

                    const $tr = $('<tr data-post-id="' + post.id + '">' +
                        '<td class="aab-td-cb">' +
                            '<label class="aab-checkbox-item aab-checkbox-inline" style="border: none; background: transparent; padding: 0; margin: 0;">' +
                                '<input type="checkbox" class="aab-post-checkbox" value="' + post.id + '"' + (isChecked ? ' checked' : '') + (post.isConverted || state.isConverting ? ' disabled' : '') + '>' +
                                '<span class="aab-checkbox-custom"><svg viewBox="0 0 12 10" width="10" height="8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="aab-check-icon"><polyline points="1.5 5 4.5 8 10.5 1.5"></polyline></svg></span>' +
                            '</label>' +
                        '</td>' +
                        '<td class="aab-td-title">' +
                            '<strong><a href="' + post.edit_url + '" target="_blank">' + safeTitle + '</a></strong>' +
                            '<div class="aab-row-links"><a href="' + post.edit_url + '" target="_blank">Edit in Block Editor</a> | <a href="' + post.view_url + '" target="_blank">View</a></div>' +
                        '</td>' +
                        '<td class="aab-td-pt"><span class="aab-post-type-tag">' + (post.post_type_label || post.post_type) + '</span></td>' +
                        '<td class="aab-td-blocks" id="aab-blocks-' + post.id + '">' + (blockBadges.length ? blockBadges.join(' ') : '—') + '</td>' +
                        '<td class="aab-td-status" id="aab-status-' + post.id + '">' + statusHtml + '</td>' +
                        '<td class="aab-td-actions" id="aab-actions-' + post.id + '">' + actionHtml + '</td>' +
                    '</tr>');

                    $postsTbody.append($tr);
                });
            }

            function updateSelectedCount() {
                const count = state.selectedIds.length;
                $('#aab-selected-count-label').text('Select All Posts (' + count + ' selected)');
                $convertBtn.find('.btn-text').text('Convert Selected (' + count + ' Posts) to AAB');
                $convertBtn.prop('disabled', count === 0 || state.isConverting);
            }

            // Update Progress in Action Bar (Zero loading spinner when completed)
            function updateBarProgress(current, total, isComplete) {
                const percent = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
                $barProgressFill.css('width', percent + '%');

                if (isComplete) {
                    $('#aab-bar-spinner').hide();
                    if (state.failedCount > 0 && state.convertedCount === 0) {
                        $barProgressLabel.html('<span style="color: #dc2626; font-weight: 700;">✕ Conversion failed (' + state.failedCount + ' error)</span>');
                        $barCancelBtn.html('Close').css({ 'color': '#dc2626', 'border-color': '#fca5a5' });
                    } else if (state.failedCount > 0 && state.convertedCount > 0) {
                        $barProgressLabel.html('<span style="color: #d97706; font-weight: 700;">⚠️ Completed with ' + state.failedCount + ' error(s) (' + state.convertedCount + ' of ' + total + ' converted)</span>');
                        $barCancelBtn.html('Done').css({ 'color': '#d97706', 'border-color': '#fde68a' });
                    } else {
                        $barProgressLabel.html('<span style="color: #059669; font-weight: 700;">✓ All ' + total + ' items converted successfully!</span>');
                        $barCancelBtn.html('Done').css({ 'color': '#059669', 'border-color': '#a7f3d0' });
                    }
                } else {
                    $('#aab-bar-spinner').show();
                    $barProgressLabel.text('Converting ' + (current + 1) + ' of ' + total + ' items (' + percent + '%)...');
                }
            }

            // Convert Single Post Handler (Uses robust server-side batch converter)
            function convertPost(postId, callback) {
                const post = state.posts.find(function(p) { return p.id === postId; });
                if (!post) {
                    if (callback) callback(false, 'Post not found');
                    return;
                }

                const $row = $('tr[data-post-id="' + postId + '"]');
                $row.addClass('aab-row-converting');
                $('#aab-status-' + postId).html('<span class="aab-status-badge aab-status-processing"><span class="aab-spinner-sm"></span> Converting...</span>');
                $('#aab-actions-' + postId).html('<button type="button" class="aab-btn aab-btn-sm aab-btn-outline" disabled>Processing...</button>');

                const enableFaqSchema = $('#aab-opt-schema').is(':checked') ? 1 : 0;
                const createRevision = $('#aab-opt-revision').is(':checked') ? 1 : 0;
                const convertTypes = [];
                $('input[name="convert_types[]"]:checked').each(function() {
                    convertTypes.push($(this).val());
                });
                const typesToSend = convertTypes.length ? convertTypes : ['rank_math', 'core_accordion', 'core_details'];

                $.ajax({
                    url: aabDashboard.ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'aab_bulk_convert_accordions',
                        nonce: aabDashboard.nonce,
                        post_ids: [postId],
                        convert_types: typesToSend,
                        enable_faq_schema: enableFaqSchema,
                        create_revision: createRevision
                    },
                    success: function(res) {
                        $row.removeClass('aab-row-converting');
                        const itemRes = res.data && res.data.results ? res.data.results[0] : null;

                        if (res.success && itemRes && itemRes.success) {
                            post.isConverted = true;
                            post.hasError = false;
                            $('#aab-status-' + postId).html('<span class="aab-status-badge aab-status-converted">✓ Converted</span>');
                            $('#aab-blocks-' + postId).html('<span class="aab-badge-pill aab-badge-converted" style="background: rgba(16, 185, 129, 0.12); color: #047857; font-weight: 600;">✓ Converted to AAB</span>');
                            $('#aab-actions-' + postId).html('<a href="' + post.view_url + '" target="_blank" class="aab-btn aab-btn-sm aab-btn-success">View Page ↗</a>');
                            $row.find('.aab-post-checkbox').prop('checked', false).prop('disabled', true);
                            state.selectedIds = state.selectedIds.filter(function(id) { return id !== postId; });
                            updateSelectedCount();
                            if (callback) callback(true);
                        } else {
                            post.hasError = true;
                            post.errorMessage = (itemRes && itemRes.message) ? itemRes.message : (res.data?.message || 'Conversion failed for this post.');
                            $('#aab-status-' + postId).html('<span class="aab-status-badge aab-status-error">✕ Error <button type="button" class="aab-error-info-btn" data-error="' + escapeAttr(post.errorMessage) + '" title="View error details"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></button></span>');
                            $('#aab-actions-' + postId).html('<button type="button" class="aab-btn aab-btn-sm aab-btn-convert-single" data-id="' + postId + '">Retry</button>');
                            if (callback) callback(false, post.errorMessage);
                        }
                    },
                    error: function(xhr) {
                        $row.removeClass('aab-row-converting');
                        post.hasError = true;
                        post.errorMessage = xhr.responseJSON?.data?.message || xhr.statusText || 'Network request failed.';
                        $('#aab-status-' + postId).html('<span class="aab-status-badge aab-status-error">✕ Error <button type="button" class="aab-error-info-btn" data-error="' + escapeAttr(post.errorMessage) + '" title="View error details"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></button></span>');
                        $('#aab-actions-' + postId).html('<button type="button" class="aab-btn aab-btn-sm aab-btn-convert-single" data-id="' + postId + '">Retry</button>');
                        if (callback) callback(false, post.errorMessage);
                    }
                });
            }

            // Start Scan
            $scanBtn.on('click', function(e) {
                e.preventDefault();
                const $btn = $(this);
                const scanNormalHtml = '<svg class="aab-icon-scan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="9"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="3" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="21" y2="12"/></svg><span class="btn-text">Scan Entire Site</span>';
                const scanLoadingHtml = '<span class="aab-btn-spinner-icon"></span><span class="btn-text">Scanning Site...</span>';

                const postTypes = [];
                $('input[name="post_types[]"]:checked').each(function() {
                    postTypes.push($(this).val());
                });

                const convertTypes = [];
                $('input[name="convert_types[]"]:checked').each(function() {
                    convertTypes.push($(this).val());
                });

                if (!postTypes.length) {
                    alert('Please select at least one post type to scan.');
                    return;
                }

                $btn.prop('disabled', true).addClass('aab-btn-loading').html(scanLoadingHtml);
                $emptyState.hide();

                $.ajax({
                    url: aabDashboard.ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'aab_scan_site_accordions',
                        nonce: aabDashboard.nonce,
                        post_types: postTypes,
                        convert_types: convertTypes
                    },
                    success: function(res) {
                        $btn.prop('disabled', false).removeClass('aab-btn-loading').html(scanNormalHtml);

                        if (res.success && res.data) {
                            state.posts = res.data.posts || [];
                            state.filteredPosts = state.posts;
                            state.selectedIds = state.posts.map(function(p) { return p.id; });
                            state.stats = res.data.stats || {};

                            $('#aab-stat-posts-count').text(state.stats.total_posts || 0);
                            $('#aab-stat-rm-count').text(state.stats.rank_math_blocks || 0);
                            $('#aab-stat-core-count').text((state.stats.core_accordion_blocks || 0) + (state.stats.core_details_blocks || 0));

                            if (state.posts.length > 0) {
                                renderTable(state.posts);
                                $selectAllTop.prop('checked', true);
                                $thSelectAll.prop('checked', true);
                                updateSelectedCount();
                                $emptyState.hide();
                                $resultsContainer.fadeIn(300, function() {
                                    const tableSection = document.getElementById('aab-posts-table-section');
                                    if (tableSection) {
                                        tableSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                });
                            } else {
                                $resultsContainer.hide();
                                $emptyState.fadeIn(300);
                            }
                        } else {
                            alert(res.data && res.data.message ? res.data.message : 'Scanning failed. Please try again.');
                            $resultsContainer.hide();
                            $emptyState.show();
                        }
                    },
                    error: function() {
                        $btn.prop('disabled', false).removeClass('aab-btn-loading').html(scanNormalHtml);
                        $resultsContainer.hide();
                        $emptyState.show();
                        alert('Network error while scanning site. Please try again.');
                    }
                });
            });

            // Select All Checkbox
            $selectAllTop.add($thSelectAll).on('change', function() {
                if (state.isConverting) return;
                const isChecked = $(this).is(':checked');
                $selectAllTop.prop('checked', isChecked);
                $thSelectAll.prop('checked', isChecked);

                if (isChecked) {
                    state.selectedIds = state.filteredPosts.filter(function(p) { return !p.isConverted; }).map(function(p) { return p.id; });
                    $('.aab-post-checkbox:not(:disabled)').prop('checked', true);
                } else {
                    state.selectedIds = [];
                    $('.aab-post-checkbox:not(:disabled)').prop('checked', false);
                }
                updateSelectedCount();
            });

            // Individual Post Checkbox
            $(document).on('change', '.aab-post-checkbox', function() {
                if (state.isConverting) return;
                const id = parseInt($(this).val(), 10);
                if ($(this).is(':checked')) {
                    if (state.selectedIds.indexOf(id) === -1) {
                        state.selectedIds.push(id);
                    }
                } else {
                    state.selectedIds = state.selectedIds.filter(function(item) { return item !== id; });
                    $selectAllTop.prop('checked', false);
                    $thSelectAll.prop('checked', false);
                }
                updateSelectedCount();
            });

            // Filter input in table header
            $filterInput.on('input', function() {
                const query = $(this).val().toLowerCase().trim();
                if (!query) {
                    state.filteredPosts = state.posts;
                } else {
                    state.filteredPosts = state.posts.filter(function(p) {
                        return p.title.toLowerCase().indexOf(query) !== -1 ||
                               p.post_type.toLowerCase().indexOf(query) !== -1;
                    });
                }
                renderTable(state.filteredPosts);
            });

            // Single Convert Button click
            $(document).on('click', '.aab-btn-convert-single', function(e) {
                e.preventDefault();
                const postId = parseInt($(this).data('id'), 10);
                if (!postId) return;
                convertPost(postId);
            });

            // View Error Details in Custom Modal
            $(document).on('click', '.aab-error-info-btn', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const err = $(this).data('error') || 'Unknown error occurred while converting post.';
                $errorModalMsg.text(err);
                $errorModal.fadeIn(200);
            });

            $(document).on('click', '#aab-error-modal-close, #aab-error-modal-ok', function(e) {
                e.preventDefault();
                $errorModal.fadeOut(200);
            });

            $(document).on('click', '#aab-error-modal', function(e) {
                if ($(e.target).is('#aab-error-modal')) {
                    $errorModal.fadeOut(200);
                }
            });

            // Batch Conversion Sequence
            function processBatchQueue() {
                if (state.isCancelled) {
                    restoreActionBar();
                    return;
                }

                if (state.currentIndex >= state.selectedIdsToProcess.length) {
                    state.isConverting = false;
                    updateBarProgress(state.totalSelected, state.totalSelected, true);
                    $('.aab-post-checkbox:not(:disabled), #aab-select-all-posts, #aab-th-select-all').prop('disabled', false);
                    return;
                }

                const currentPostId = state.selectedIdsToProcess[state.currentIndex];
                updateBarProgress(state.currentIndex, state.totalSelected, false);

                convertPost(currentPostId, function(success) {
                    if (success) {
                        state.convertedCount++;
                    } else {
                        state.failedCount++;
                    }
                    state.currentIndex++;
                    setTimeout(processBatchQueue, 200);
                });
            }

            function restoreActionBar() {
                state.isConverting = false;
                $actionBar.removeClass('aab-action-bar-active');
                $actionBarProgress.hide();
                $actionBarDefault.show();
                $('.aab-post-checkbox:not(:disabled), #aab-select-all-posts, #aab-th-select-all').prop('disabled', false);
                $barCancelBtn.html('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="margin-right: 4px; vertical-align: middle;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Cancel').css({ 'color': '#ef4444', 'border-color': '#fca5a5' });
                updateSelectedCount();
            }

            // Start Bulk Conversion
            $convertBtn.on('click', function(e) {
                e.preventDefault();
                if (!state.selectedIds.length) {
                    alert('Please select at least one post to convert.');
                    return;
                }

                state.isConverting = true;
                state.isCancelled = false;
                state.currentIndex = 0;
                state.convertedCount = 0;
                state.failedCount = 0;
                state.selectedIdsToProcess = [...state.selectedIds];
                state.totalSelected = state.selectedIdsToProcess.length;

                // Disable checkboxes during processing
                $('.aab-post-checkbox, #aab-select-all-posts, #aab-th-select-all').prop('disabled', true);

                // Transition Action Bar into In-Bar Progress State
                $actionBar.addClass('aab-action-bar-active');
                $actionBarDefault.hide();
                $actionBarProgress.show();

                updateBarProgress(0, state.totalSelected, false);
                processBatchQueue();
            });

            // Cancel / Done Button in Action Bar
            $barCancelBtn.on('click', function(e) {
                e.preventDefault();
                if (state.isConverting) {
                    state.isCancelled = true;
                } else {
                    restoreActionBar();
                }
            });
        }
    };

    // Initialize when DOM is ready
    $(document).ready(function() {
        AABDashboard.init();
    });

})(jQuery);
