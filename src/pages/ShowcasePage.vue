<template>
  <div class="showcase">

    <!-- ── Hero ──────────────────────────────────────────────────────── -->
    <header class="hero">
      <div class="hero-icon">
        <i class="pi pi-palette" />
      </div>
      <h1>Neumorphic UI</h1>
      <p>PrimeVue 4 · Custom Theme Showcase</p>
      <div class="gradient-divider" style="width:120px;margin:0 auto;" />
    </header>

    <!-- ── Colour Palette ────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Colour Palette</div>
      <div class="palette-row">
        <div class="swatch" v-for="s in palette" :key="s.label"
             :style="{ background: s.color }">
          <span class="swatch-label">{{ s.label }}</span>
          <span class="swatch-hex">{{ s.color }}</span>
        </div>
      </div>
    </section>

    <!-- ── Buttons ───────────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Buttons</div>
      <div class="neu-card">

        <p class="sub-label">Filled</p>
        <div class="flex-row wrap mb-4">
          <Button label="Submit" icon="pi pi-send" />
          <Button label="Save Draft" severity="secondary" />
          <Button label="Discard" severity="danger" icon="pi pi-trash" />
          <Button label="Info" severity="info" icon="pi pi-info-circle" />
          <Button label="Warn" severity="warn" icon="pi pi-exclamation-triangle" />
          <Button label="Dark" severity="contrast" />
        </div>

        <p class="sub-label">Outlined</p>
        <div class="flex-row wrap mb-4">
          <Button label="Submit" icon="pi pi-send" outlined />
          <Button label="Save Draft" severity="secondary" outlined />
          <Button label="Discard" severity="danger" outlined icon="pi pi-trash" />
          <Button label="Info" severity="info" outlined />
        </div>

        <p class="sub-label">Text / Ghost</p>
        <div class="flex-row wrap mb-4">
          <Button label="Cancel" text />
          <Button label="Learn more" severity="secondary" text icon="pi pi-arrow-right" iconPos="right" />
          <Button label="Delete" severity="danger" text icon="pi pi-times" />
        </div>

        <p class="sub-label">Icon only</p>
        <div class="flex-row wrap mb-4">
          <Button icon="pi pi-send" rounded aria-label="Send" />
          <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
          <Button icon="pi pi-trash" severity="danger" rounded aria-label="Delete" />
          <Button icon="pi pi-times" text rounded aria-label="Close" />
        </div>

        <p class="sub-label">Sizes</p>
        <div class="flex-row wrap mb-4" style="align-items:center">
          <Button label="Small" size="small" />
          <Button label="Normal" />
          <Button label="Large" size="large" />
        </div>

        <p class="sub-label">Loading / Disabled</p>
        <div class="flex-row wrap">
          <Button label="Loading…" :loading="true" />
          <Button label="Disabled" :disabled="true" />
        </div>
      </div>
    </section>

    <!-- ── Text Inputs ───────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Text Inputs</div>
      <div class="neu-card">

        <div class="form-grid">
          <div class="field">
            <label>Full Name</label>
            <InputText v-model="form.name" placeholder="Enter your full name" />
            <small class="helper">This will be displayed publicly</small>
          </div>

          <div class="field">
            <label>Email Address</label>
            <InputText v-model="form.email" placeholder="you@example.com" />
            <small class="helper">We'll never share your email</small>
          </div>

          <div class="field">
            <label>Password</label>
            <Password v-model="form.password" placeholder="Enter password"
                      toggleMask :feedback="true" fluid />
          </div>

          <div class="field">
            <label>Quantity</label>
            <InputNumber v-model="form.quantity" :min="0" :max="999"
                         showButtons fluid />
          </div>

          <div class="field full">
            <label>Message</label>
            <Textarea v-model="form.message" placeholder="Write your message here…"
                      rows="4" autoResize style="width:100%" />
            <small class="helper" style="text-align:right;display:block">
              {{ form.message.length }} / 500
            </small>
          </div>

          <div class="field">
            <label class="label-error">Error state</label>
            <InputText v-model="form.errorField" placeholder="invalid@"
                       :invalid="true" />
            <small style="color:#E86B6B">Please enter a valid email address</small>
          </div>

          <div class="field">
            <label class="label-success">Success state</label>
            <InputText v-model="form.successField" placeholder="user@example.com"
                       class="p-inputtext-success" />
            <small style="color:#6BC88E">Email verified successfully</small>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Select Controls ──────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Select Controls</div>
      <div class="neu-card">
        <div class="form-grid">

          <div class="field">
            <label>Topic (Select)</label>
            <Select v-model="form.topic" :options="topicOptions"
                    optionLabel="label" optionValue="value"
                    placeholder="Select a topic…" fluid />
          </div>

          <div class="field">
            <label>Tags (MultiSelect)</label>
            <MultiSelect v-model="form.tags" :options="tagOptions"
                         optionLabel="label" optionValue="value"
                         placeholder="Choose tags…" :maxSelectedLabels="3" fluid />
          </div>

          <div class="field">
            <label>Country (AutoComplete)</label>
            <AutoComplete v-model="form.country" :suggestions="filteredCountries"
                          @complete="searchCountry" placeholder="Type to search…"
                          fluid />
          </div>

          <div class="field">
            <label>Date (DatePicker)</label>
            <DatePicker v-model="form.date" placeholder="Pick a date"
                        showIcon iconDisplay="input" fluid />
          </div>

        </div>
      </div>
    </section>

    <!-- ── Choice Controls ───────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Choice Controls</div>
      <div class="neu-card">

        <div class="form-grid">
          <div class="field">
            <p class="sub-label">Checkboxes</p>
            <div class="choice-list">
              <div class="choice-row" v-for="opt in checkOptions" :key="opt.value">
                <Checkbox v-model="form.checks" :value="opt.value"
                          :inputId="`chk-${opt.value}`" />
                <label :for="`chk-${opt.value}`">{{ opt.label }}</label>
              </div>
            </div>
          </div>

          <div class="field">
            <p class="sub-label">Radio Buttons</p>
            <div class="choice-list">
              <div class="choice-row" v-for="opt in radioOptions" :key="opt.value">
                <RadioButton v-model="form.radio" :value="opt.value"
                             :inputId="`rb-${opt.value}`" />
                <label :for="`rb-${opt.value}`">{{ opt.label }}</label>
              </div>
            </div>
          </div>

          <div class="field">
            <p class="sub-label">Toggle Switches</p>
            <div class="choice-list">
              <div class="choice-row" v-for="tog in toggles" :key="tog.label">
                <ToggleSwitch v-model="tog.val" />
                <span>{{ tog.label }}</span>
                <Tag :value="tog.val ? 'On' : 'Off'"
                     :severity="tog.val ? 'success' : 'secondary'"
                     style="margin-left:auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Range Controls ────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Range Controls</div>
      <div class="neu-card">
        <div class="form-grid">

          <div class="field full">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <label>Satisfaction Level</label>
              <Tag :value="String(form.satisfaction)" severity="success" />
            </div>
            <Slider v-model="form.satisfaction" :min="0" :max="100" />
            <div style="display:flex;justify-content:space-between;margin-top:4px">
              <small class="helper">0</small>
              <small class="helper">50</small>
              <small class="helper">100</small>
            </div>
          </div>

          <div class="field full">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <label>Price Range</label>
              <Tag :value="`$${form.priceRange[0]} – $${form.priceRange[1]}`" severity="info" />
            </div>
            <Slider v-model="form.priceRange" range :min="0" :max="1000" :step="10" />
          </div>

          <div class="field" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem">
            <label>Rate Your Experience</label>
            <Rating v-model="form.rating" :stars="5" />
            <small class="helper">{{ ratingLabel }}</small>
          </div>

          <div class="field" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem">
            <label>Volume</label>
            <Knob v-model="form.knob" :min="0" :max="100" :size="110"
                  valueColor="#7ECBA1" rangeColor="#dcdcdc" />
          </div>

        </div>
      </div>
    </section>

    <!-- ── Data Display ──────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Data Display</div>
      <div class="neu-card">

        <p class="sub-label">Tags</p>
        <div class="flex-row wrap">
          <Tag value="Default" />
          <Tag value="Primary" severity="primary" />
          <Tag value="Success" severity="success" />
          <Tag value="Info" severity="info" />
          <Tag value="Warning" severity="warn" />
          <Tag value="Danger" severity="danger" />
          <Tag value="Secondary" severity="secondary" />
          <Tag value="Contrast" severity="contrast" />
        </div>

        <p class="sub-label" style="margin-top:1.5rem">Chips</p>
        <div class="flex-row wrap">
          <Chip label="Vue 3" />
          <Chip label="PrimeVue 4" icon="pi pi-prime" />
          <Chip label="Neumorphic" removable @remove="() => {}" />
          <Chip label="Design" icon="pi pi-palette" />
        </div>

        <p class="sub-label" style="margin-top:1.5rem">Input Chips</p>
        <InputChips v-model="form.chips" placeholder="Type and press Enter…" fluid />

        <p class="sub-label" style="margin-top:1.5rem">Progress Bars</p>
        <div style="display:flex;flex-direction:column;gap:1rem">
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:4px">
              <small class="helper">Upload progress</small>
              <small class="helper">72%</small>
            </div>
            <ProgressBar :value="72" :showValue="false" />
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:4px">
              <small class="helper">Profile completion</small>
              <small class="helper">45%</small>
            </div>
            <ProgressBar :value="45" :showValue="false" />
          </div>
          <ProgressBar mode="indeterminate" style="height:8px" />
        </div>

        <p class="sub-label" style="margin-top:1.5rem">Badges</p>
        <div class="flex-row wrap" style="align-items:center">
          <Badge value="4" />
          <Badge value="12" severity="info" />
          <Badge value="99+" severity="danger" />
          <Badge severity="success" />
          <span class="p-overlay-badge" style="font-size:1.5rem">
            <i class="pi pi-bell" />
            <Badge value="5" severity="danger" />
          </span>
        </div>

      </div>
    </section>

    <!-- ── DataTable ─────────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">DataTable</div>
      <DataTable :value="tableData" stripedRows removableSort
                 :paginator="true" :rows="5"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink">
        <template #header>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-weight:700">User Submissions</span>
            <InputText v-model="tableFilter" placeholder="Search…" style="width:220px" />
          </div>
        </template>
        <Column field="id" header="#" sortable style="width:60px" />
        <Column field="name" header="Name" sortable />
        <Column field="topic" header="Topic" sortable />
        <Column field="rating" header="Rating">
          <template #body="{ data }">
            <div style="display:flex;gap:2px">
              <i v-for="i in 5" :key="i"
                 class="pi"
                 :class="i <= data.rating ? 'pi-star-fill' : 'pi-star'"
                 :style="{ color: i <= data.rating ? '#f5c87a' : '#dcdcdc', fontSize:'0.875rem' }" />
            </div>
          </template>
        </Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status"
                 :severity="data.status === 'Sent' ? 'success' : data.status === 'Draft' ? 'warn' : 'secondary'" />
          </template>
        </Column>
        <Column header="Actions" style="width:100px">
          <template #body>
            <div style="display:flex;gap:6px">
              <Button icon="pi pi-pencil" text rounded size="small" />
              <Button icon="pi pi-trash" text rounded severity="danger" size="small" />
            </div>
          </template>
        </Column>
      </DataTable>
    </section>

    <!-- ── Panels ───────────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Panels</div>
      <div class="form-grid">

        <Card class="field" style="grid-column:span 1">
          <template #header>
            <div style="background:linear-gradient(135deg,#7ECBA1,#8dc6e8);height:120px;border-radius:14px 14px 0 0;display:flex;align-items:center;justify-content:center">
              <i class="pi pi-check-circle" style="font-size:3rem;color:white" />
            </div>
          </template>
          <template #title>Success Card</template>
          <template #subtitle>Everything looks great</template>
          <template #content>
            <p style="color:#8a8a8a;font-size:0.875rem">Your feedback has been submitted successfully. We appreciate you taking the time!</p>
          </template>
          <template #footer>
            <Button label="View Details" size="small" />
          </template>
        </Card>

        <Card class="field" style="grid-column:span 1">
          <template #header>
            <div style="background:linear-gradient(135deg,#B8A9E8,#F5A0A0);height:120px;border-radius:14px 14px 0 0;display:flex;align-items:center;justify-content:center">
              <i class="pi pi-star-fill" style="font-size:3rem;color:white" />
            </div>
          </template>
          <template #title>Featured Card</template>
          <template #subtitle>Highly recommended</template>
          <template #content>
            <p style="color:#8a8a8a;font-size:0.875rem">This component showcases the neumorphic card style with gradient header and soft shadow depth.</p>
          </template>
          <template #footer>
            <div style="display:flex;gap:8px">
              <Button label="Like" icon="pi pi-heart" size="small" severity="secondary" />
              <Button label="Share" icon="pi pi-share-alt" size="small" text />
            </div>
          </template>
        </Card>

        <Panel header="Collapsible Panel" :toggleable="true" class="field full">
          <p style="color:#8a8a8a;font-size:0.875rem;margin:0">
            Panels can be toggled open and closed. This one contains helpful information
            that can be hidden when not needed, keeping the UI clean and focused.
          </p>
        </Panel>

      </div>
    </section>

    <!-- ── Accordion & Tabs ──────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Accordion & Tabs</div>
      <div class="form-grid">

        <div class="field full">
          <Accordion :value="['0']" multiple>
            <AccordionPanel value="0">
              <AccordionHeader>How does neumorphic design work?</AccordionHeader>
              <AccordionContent>
                <p style="color:#8a8a8a;font-size:0.875rem;margin:0">
                  Neumorphism creates a soft 3D illusion using two shadows — a dark one
                  below-right and a light one above-left. Elements appear to protrude from
                  or recede into the same surface material.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
              <AccordionHeader>What's new in PrimeVue 4?</AccordionHeader>
              <AccordionContent>
                <p style="color:#8a8a8a;font-size:0.875rem;margin:0">
                  PrimeVue 4 introduces a new Design Token system with Presets (Aura, Lara,
                  Nora, Material), full dark mode support, improved accessibility, and
                  CSS-layer isolation for easier customisation.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
              <AccordionHeader>Can I use custom fonts?</AccordionHeader>
              <AccordionContent>
                <p style="color:#8a8a8a;font-size:0.875rem;margin:0">
                  Yes — this theme uses Inter from Google Fonts, loaded in index.html.
                  Any web font can be dropped in through the CSS font-family variables.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>

        <div class="field full">
          <Tabs value="overview">
            <TabList>
              <Tab value="overview">Overview</Tab>
              <Tab value="design">Design</Tab>
              <Tab value="code">Code</Tab>
              <Tab value="preview">Preview</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="overview">
                <p style="color:#8a8a8a;font-size:0.875rem">
                  The overview tab provides a high-level summary of the neumorphic theme built
                  on top of PrimeVue 4's Aura preset with custom design tokens and CSS overrides.
                </p>
              </TabPanel>
              <TabPanel value="design">
                <p style="color:#8a8a8a;font-size:0.875rem">
                  Design tokens define the visual language — colours extracted from the Pencil
                  design file, shadows provided by the designer, and typography set to Inter.
                </p>
              </TabPanel>
              <TabPanel value="code">
                <p style="color:#8a8a8a;font-size:0.875rem">
                  The theme lives in <code style="background:rgba(0,0,0,0.05);padding:2px 6px;border-radius:4px">src/theme/neumorph.js</code>
                  (preset tokens) and <code style="background:rgba(0,0,0,0.05);padding:2px 6px;border-radius:4px">src/assets/neumorph.css</code> (shadow overrides).
                </p>
              </TabPanel>
              <TabPanel value="preview">
                <p style="color:#8a8a8a;font-size:0.875rem">
                  You are currently viewing the live preview with all components rendered
                  using the custom neumorphic PrimeVue 4 theme.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

      </div>
    </section>

    <!-- ── Messages & Notifications ─────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Messages & Notifications</div>
      <div class="neu-card">

        <p class="sub-label">Inline Messages</p>
        <div style="display:flex;flex-direction:column;gap:0.75rem">
          <Message severity="success" icon="pi pi-check-circle">
            Your feedback has been submitted successfully!
          </Message>
          <Message severity="info" icon="pi pi-info-circle">
            Your session will expire in 15 minutes.
          </Message>
          <Message severity="warn" icon="pi pi-exclamation-triangle">
            Please fill in all required fields before submitting.
          </Message>
          <Message severity="error" icon="pi pi-times-circle">
            Failed to send — please try again.
          </Message>
        </div>

        <p class="sub-label" style="margin-top:1.5rem">Toast Notifications</p>
        <div class="flex-row wrap">
          <Button label="Success Toast" severity="secondary" outlined
                  @click="showToast('success')" />
          <Button label="Error Toast" severity="danger" outlined
                  @click="showToast('error')" />
          <Button label="Warn Toast" severity="warn" outlined
                  @click="showToast('warn')" />
          <Button label="Info Toast" severity="info" outlined
                  @click="showToast('info')" />
        </div>

      </div>
    </section>

    <!-- ── Dialog ────────────────────────────────────────────────────── -->
    <section class="section">
      <div class="section-label">Dialog</div>
      <div class="neu-card">
        <div class="flex-row wrap">
          <Button label="Open Dialog" icon="pi pi-external-link"
                  @click="dialogVisible = true" />
          <Button label="Confirm Action" icon="pi pi-question-circle" severity="warn"
                  @click="confirmAction" />
        </div>
      </div>

      <Dialog v-model:visible="dialogVisible" header="Contact Details"
              modal :style="{ width: '480px' }">
        <div style="display:flex;flex-direction:column;gap:1.25rem">
          <div class="field">
            <label>Full Name</label>
            <InputText v-model="form.name" placeholder="John Doe" fluid />
          </div>
          <div class="field">
            <label>Email</label>
            <InputText v-model="form.email" placeholder="john@example.com" fluid />
          </div>
          <div class="field">
            <label>Topic</label>
            <Select v-model="form.topic" :options="topicOptions"
                    optionLabel="label" optionValue="value"
                    placeholder="Choose…" fluid />
          </div>
        </div>
        <template #footer>
          <Button label="Cancel" text @click="dialogVisible = false" />
          <Button label="Save" icon="pi pi-check" @click="dialogVisible = false" />
        </template>
      </Dialog>

      <ConfirmDialog />
    </section>

    <!-- ── Feedback Form (design faithful) ──────────────────────────── -->
    <section class="section">
      <div class="section-label">Feedback Form — Design Faithful</div>
      <div class="feedback-wrap">
        <div class="feedback-card">

          <!-- Title -->
          <div class="fb-title-row">
            <div class="fb-icon">
              <i class="pi pi-comments" style="color:#7ECBA1;font-size:1.25rem" />
            </div>
            <div>
              <h2 class="fb-heading">Feedback Form</h2>
              <p class="fb-sub">We'd love to hear from you! Please fill out the form below.</p>
            </div>
          </div>
          <div class="gradient-divider" />

          <!-- Fields -->
          <div class="field">
            <label>Full Name</label>
            <div class="input-icon-wrap">
              <i class="pi pi-user input-icon" />
              <InputText v-model="fb.name" placeholder="Enter your full name" fluid />
            </div>
            <small class="helper">This will be displayed publicly</small>
          </div>

          <div class="field">
            <label>Email Address</label>
            <div class="input-icon-wrap">
              <i class="pi pi-envelope input-icon" />
              <InputText v-model="fb.email" placeholder="you@example.com" fluid />
            </div>
            <small class="helper">We'll never share your email</small>
          </div>

          <div class="field">
            <label>Message</label>
            <Textarea v-model="fb.message" placeholder="Write your message here…"
                      rows="4" style="width:100%" />
            <div style="text-align:right">
              <small class="helper">{{ fb.message.length }} / 500</small>
            </div>
          </div>

          <div class="field">
            <label>Topic</label>
            <Select v-model="fb.topic" :options="topicOptions"
                    optionLabel="label" optionValue="value"
                    placeholder="Select a topic…" fluid />
            <small class="helper">Choose the area your feedback relates to</small>
          </div>

          <div class="gradient-divider" />

          <div class="field">
            <label style="display:block;margin-bottom:0.75rem">Preferences</label>
            <div class="choice-list">
              <div class="choice-row" v-for="opt in fbPrefs" :key="opt.value">
                <Checkbox v-model="fb.prefs" :value="opt.value"
                          :inputId="`fb-${opt.value}`" />
                <label :for="`fb-${opt.value}`">{{ opt.label }}</label>
              </div>
            </div>
          </div>

          <div class="gradient-divider" />

          <div class="field">
            <label style="display:block;margin-bottom:0.75rem">How did you hear about us?</label>
            <div class="choice-list">
              <div class="choice-row" v-for="opt in fbSources" :key="opt.value">
                <RadioButton v-model="fb.source" :value="opt.value"
                             :inputId="`src-${opt.value}`" />
                <label :for="`src-${opt.value}`">{{ opt.label }}</label>
              </div>
            </div>
          </div>

          <div class="gradient-divider" />

          <div class="field">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <label>Satisfaction Level</label>
              <Tag :value="String(fb.satisfaction)" severity="success" />
            </div>
            <Slider v-model="fb.satisfaction" :min="0" :max="100" />
            <div style="display:flex;justify-content:space-between;margin-top:4px">
              <small class="helper">0</small>
              <small class="helper">50</small>
              <small class="helper">100</small>
            </div>
          </div>

          <div class="gradient-divider" />

          <div class="field">
            <label style="display:block;margin-bottom:0.75rem">Rate Your Experience</label>
            <Rating v-model="fb.rating" :stars="5" />
            <small class="helper" style="display:block;margin-top:4px">
              {{ fb.rating ? `${fb.rating} out of 5` : 'Not rated yet' }}
            </small>
          </div>

          <div class="gradient-divider" style="background:linear-gradient(90deg,#F5A0A0,#B8A9E8,#7ECBA1)" />

          <!-- Actions -->
          <div class="fb-actions">
            <Button label="Submit" icon="pi pi-send" @click="submitFeedback" />
            <Button label="Save Draft" severity="secondary" @click="showToast('info')" />
            <Button label="Discard" severity="danger" icon="pi pi-trash" outlined />
            <Button label="Cancel" text />
          </div>

          <!-- Footer -->
          <div class="fb-footer">
            <div class="gradient-divider" style="width:80px;height:3px;border-radius:2px;margin:0 auto" />
            <p style="color:#a0a0a0;font-size:0.75rem;text-align:center;margin:8px 0 0">
              Your feedback helps us improve. Thank you!
            </p>
            <div style="display:flex;justify-content:center;gap:12px;margin-top:8px">
              <div class="fb-social-icon"><i class="pi pi-twitter" /></div>
              <div class="fb-social-icon"><i class="pi pi-linkedin" /></div>
              <div class="fb-social-icon"><i class="pi pi-github" /></div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useConfirm } from 'primevue/useconfirm'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Password from 'primevue/password'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'
import MultiSelect from 'primevue/multiselect'
import AutoComplete from 'primevue/autocomplete'
import DatePicker from 'primevue/datepicker'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'
import Slider from 'primevue/slider'
import Rating from 'primevue/rating'
import Knob from 'primevue/knob'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Badge from 'primevue/badge'
import Chip from 'primevue/chip'
import InputChips from 'primevue/inputchips'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Message from 'primevue/message'
import Dialog from 'primevue/dialog'
import ConfirmDialog from 'primevue/confirmdialog'
import Divider from 'primevue/divider'

const toast   = useToast()
const confirm = useConfirm()

/* ── Showcase form state ─────────────────────────────────────────────── */
const form = reactive({
  name:         '',
  email:        '',
  password:     '',
  quantity:     1,
  message:      '',
  errorField:   'invalid@',
  successField: 'user@example.com',
  topic:        null,
  tags:         [],
  country:      '',
  date:         null,
  checks:       ['newsletter'],
  radio:        'social',
  satisfaction: 72,
  priceRange:   [200, 700],
  rating:       3,
  knob:         65,
  chips:        ['Vue 3', 'PrimeVue'],
})

const toggles = reactive([
  { label: 'Email notifications', val: true  },
  { label: 'Dark mode',           val: false },
  { label: 'Auto-save',           val: true  },
])

/* ── Options ─────────────────────────────────────────────────────────── */
const topicOptions = [
  { label: 'Bug Report',       value: 'bug'     },
  { label: 'Feature Request',  value: 'feature' },
  { label: 'General Feedback', value: 'general' },
  { label: 'Performance',      value: 'perf'    },
  { label: 'Documentation',    value: 'docs'    },
]
const tagOptions = [
  { label: 'Vue 3',      value: 'vue3'    },
  { label: 'PrimeVue',   value: 'primevue'},
  { label: 'Vite',       value: 'vite'    },
  { label: 'TypeScript', value: 'ts'      },
  { label: 'Design',     value: 'design'  },
]
const checkOptions = [
  { label: 'I agree to Terms of Service',            value: 'terms'      },
  { label: 'Subscribe to product updates',           value: 'newsletter' },
  { label: 'Send me a copy of my response',          value: 'copy'       },
]
const radioOptions = [
  { label: 'Search Engine',    value: 'search'  },
  { label: 'Social Media',     value: 'social'  },
  { label: 'Friend or Colleague', value: 'friend'},
  { label: 'Other',            value: 'other'   },
]

const countries = ['Australia','Brazil','Canada','Denmark','Egypt','France',
  'Germany','Hungary','India','Japan','Kenya','Luxembourg','Mexico','Nepal',
  'Norway','Portugal','Qatar','Romania','Spain','Turkey','Ukraine','Vietnam']
const filteredCountries = ref([])
function searchCountry({ query }) {
  filteredCountries.value = countries.filter(c =>
    c.toLowerCase().startsWith(query.toLowerCase()))
}

/* ── Palette ─────────────────────────────────────────────────────────── */
const palette = [
  { label: 'BG / Card',    color: '#E4E4E4' },
  { label: 'Input',        color: '#E0E0E0' },
  { label: 'Divider',      color: '#D8D8D8' },
  { label: 'Dark Text',    color: '#3D3D3D' },
  { label: 'Muted Text',   color: '#8A8A8A' },
  { label: 'Primary',      color: '#7ECBA1' },
  { label: 'Secondary',    color: '#B8A9E8' },
  { label: 'Danger',       color: '#F5A0A0' },
  { label: 'Info',         color: '#8DC6E8' },
  { label: 'Warning',      color: '#F5C87A' },
]

/* ── DataTable data ──────────────────────────────────────────────────── */
const tableFilter = ref('')
const tableData = [
  { id: 1, name: 'Alice Morgan',    topic: 'Bug Report',       rating: 4, status: 'Sent'    },
  { id: 2, name: 'Bob Chen',        topic: 'Feature Request',  rating: 5, status: 'Sent'    },
  { id: 3, name: 'Carol Smith',     topic: 'General Feedback', rating: 3, status: 'Draft'   },
  { id: 4, name: 'David Park',      topic: 'Performance',      rating: 2, status: 'Pending' },
  { id: 5, name: 'Emma Johnson',    topic: 'Documentation',    rating: 5, status: 'Sent'    },
  { id: 6, name: 'Frank Mueller',   topic: 'Bug Report',       rating: 1, status: 'Sent'    },
  { id: 7, name: 'Grace Liu',       topic: 'Feature Request',  rating: 4, status: 'Draft'   },
  { id: 8, name: 'Henry Adams',     topic: 'General Feedback', rating: 3, status: 'Pending' },
]

/* ── Rating label ────────────────────────────────────────────────────── */
const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent']
const ratingLabel  = computed(() => ratingLabels[form.rating] ?? 'Not rated')

/* ── Toast ───────────────────────────────────────────────────────────── */
function showToast(type) {
  const map = {
    success: { summary: 'Success',  detail: 'Feedback submitted successfully!',    life: 3000 },
    error:   { summary: 'Error',    detail: 'Something went wrong. Please retry.', life: 3000 },
    warn:    { summary: 'Warning',  detail: 'Please fill all required fields.',     life: 3000 },
    info:    { summary: 'Info',     detail: 'Draft saved automatically.',           life: 3000 },
  }
  toast.add({ severity: type, ...map[type] })
}

/* ── Dialog & Confirm ────────────────────────────────────────────────── */
const dialogVisible = ref(false)
function confirmAction() {
  confirm.require({
    message: 'Are you sure you want to discard this form?',
    header:  'Discard Changes',
    icon:    'pi pi-exclamation-triangle',
    acceptSeverity: 'danger',
    accept: () => toast.add({ severity: 'warn', summary: 'Discarded', detail: 'Form cleared.', life: 2500 }),
  })
}

/* ── Feedback form ───────────────────────────────────────────────────── */
const fb = reactive({
  name:         '',
  email:        '',
  message:      '',
  topic:        null,
  prefs:        ['newsletter'],
  source:       'social',
  satisfaction: 72,
  rating:       3,
})
const fbPrefs = [
  { label: 'I agree to the Terms of Service and Privacy Policy', value: 'terms'      },
  { label: 'Subscribe to product updates and newsletters',        value: 'newsletter' },
  { label: 'Send me a copy of my response',                       value: 'copy'       },
]
const fbSources = [
  { label: 'Search Engine',     value: 'search'  },
  { label: 'Social Media',      value: 'social'  },
  { label: 'Friend or Colleague', value: 'friend'},
  { label: 'Other',             value: 'other'   },
]
function submitFeedback() {
  showToast('success')
}
</script>

<style scoped>
/* ── Layout ──────────────────────────────────────────────────────────── */
.showcase {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* ── Hero ────────────────────────────────────────────────────────────── */
.hero {
  text-align: center;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.hero-icon {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background: var(--neu-bg);
  box-shadow: var(--neu-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #7ECBA1;
  margin-bottom: 0.5rem;
}
.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3d3d3d;
  margin: 0;
}
.hero p {
  color: #8a8a8a;
  font-size: 1rem;
  margin: 0;
}

/* ── Section ─────────────────────────────────────────────────────────── */
.section { display: flex; flex-direction: column; gap: 0.75rem; }

.sub-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #a0a0a0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.5rem;
}

/* ── Palette ─────────────────────────────────────────────────────────── */
.palette-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.swatch {
  width: 80px;
  height: 80px;
  border-radius: 14px;
  box-shadow: var(--neu-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 8px;
}
.swatch-label {
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(0,0,0,0.55);
  text-align: center;
  line-height: 1.2;
}
.swatch-hex {
  font-size: 0.6rem;
  color: rgba(0,0,0,0.4);
  font-family: monospace;
}

/* ── Form helpers ────────────────────────────────────────────────────── */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.field { display: flex; flex-direction: column; gap: 0.375rem; }
.field.full { grid-column: span 2; }
.field label { font-size: 0.8125rem; font-weight: 600; color: #3d3d3d; }
.label-error { color: #E86B6B; }
.label-success { color: #6BC88E; }
.helper { font-size: 0.6875rem; font-weight: 500; color: #8a8a8a; }

.input-icon-wrap { position: relative; }
.input-icon-wrap .p-inputtext { padding-left: 2.5rem !important; width: 100%; }
.input-icon {
  position: absolute;
  left: 0.875rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8a8a8a;
  font-size: 1rem;
  pointer-events: none;
  z-index: 1;
}

.flex-row { display: flex; gap: 0.75rem; }
.wrap { flex-wrap: wrap; }

.choice-list { display: flex; flex-direction: column; gap: 0.75rem; }
.choice-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}
.choice-row label { cursor: pointer; font-size: 0.875rem; color: #3d3d3d; }

/* ── Feedback Card ───────────────────────────────────────────────────── */
.feedback-wrap {
  display: flex;
  justify-content: center;
}
.feedback-card {
  width: 100%;
  max-width: 600px;
  background: var(--neu-bg);
  border-radius: 20px;
  box-shadow: var(--neu-shadow);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.fb-title-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.fb-icon {
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #e4e4e4;
  box-shadow: var(--neu-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fb-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3d3d3d;
  margin: 0;
}
.fb-sub {
  font-size: 0.875rem;
  color: #8a8a8a;
  margin: 0.25rem 0 0;
}

.fb-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.fb-footer { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; }
.fb-social-icon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--neu-bg);
  box-shadow: var(--neu-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8a8a;
  font-size: 0.875rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.fb-social-icon:hover {
  box-shadow: var(--neu-shadow-active);
}

/* ── Responsive ──────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .showcase { padding: 1.5rem 1rem 4rem; gap: 2rem; }
  .form-grid { grid-template-columns: 1fr; }
  .field.full { grid-column: span 1; }
  .hero h1 { font-size: 1.75rem; }
  .feedback-card { padding: 1.5rem; }
}
</style>
